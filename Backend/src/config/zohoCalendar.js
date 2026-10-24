
const {
  ZOHO_CLIENT_ID,
  ZOHO_CLIENT_SECRET,
  ZOHO_REDIRECT_URI,
  ZOHO_REFRESH_TOKEN,
} = process.env

const ZOHO_ACCOUNTS_URL = 'https://accounts.zoho.in'
const ZOHO_CALENDAR_API_URL = 'https://calendar.zoho.in/api/v1'

export function getZohoAuthUrl() {
  const params = new URLSearchParams({
    client_id: ZOHO_CLIENT_ID,
    redirect_uri: ZOHO_REDIRECT_URI,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    scope: [
  'ZohoCalendar.event.CREATE',
  'ZohoCalendar.event.READ',
  'ZohoCalendar.calendar.READ',
  'ZohoMeeting.meeting.CREATE',
].join(','),
  })

  return `${ZOHO_ACCOUNTS_URL}/oauth/v2/auth?${params.toString()}`
}

async function getZohoAccessToken() {
  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    throw new Error('Missing Zoho OAuth environment variables.')
  }

  const response = await fetch(
    `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: ZOHO_CLIENT_ID,
        client_secret: ZOHO_CLIENT_SECRET,
        refresh_token: ZOHO_REFRESH_TOKEN,
      }),
    }
  )

  const data = await response.json()

  if (!response.ok || !data.access_token) {
    throw new Error(
      `Zoho token refresh failed: ${data.error || response.status}`
    )
  }

  return data.access_token
}

export async function zohoCalendarRequest(path, options = {}) {
  const accessToken = await getZohoAccessToken()

  const response = await fetch(
    `${ZOHO_CALENDAR_API_URL}${path}`,
    {
      ...options,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        ...options.headers,
      },
    }
  )

  const responseText = await response.text()
  let data

  try {
    data = responseText ? JSON.parse(responseText) : {}
  } catch {
    throw new Error(
      `Zoho Calendar returned a non-JSON response (HTTP ${response.status}).`
    )
  }

  if (!response.ok) {
    console.error(
      'Zoho Calendar API error:',
      JSON.stringify(
        { status: response.status, response: data },
        null,
        2
      )
    )

    throw new Error(
      `Zoho Calendar request failed: ${JSON.stringify(data, null, 2)}`
    )
  }

  return data
}

export async function getZohoCalendars() {
  return zohoCalendarRequest('/calendars')
}

export async function getZohoEvents(calendarUid, startDate, endDate) {
  const range = encodeURIComponent(
    JSON.stringify({
      start: startDate,
      end: endDate,
    })
  )

  return zohoCalendarRequest(
    `/calendars/${calendarUid}/events?range=${range}`
  )
}
