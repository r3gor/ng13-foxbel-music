// 4 types of statuses: 'connected',  'notConnected', 'unknown', 'not_authorized'
export interface ILoginStatus {
	status: 'connected' | 'notConnected' | 'unknown' | 'not_authorized',
	authResponse: {
		accessToken: string,
		expire: string,
		userID: string,
	}
}