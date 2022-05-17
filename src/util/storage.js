
//TTL 0 gives ttl according to browser app memory
export function setWithExpiry(key, value, ttl) {
	const now = new Date()
	let exp = 0
	if(ttl === 0){
		exp = 0
	}else{
		exp = now.getTime() + ttl
	}

	const item = {
		value: value,
		expiry: exp,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

export function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()

	if (item.expiry !== 0 && now.getTime() > item.expiry) {
		localStorage.removeItem(key)
		return null
	}
	return item.value
}


export const ALL_MOVIES_STORAGE_KEY = 'MovieWebshopApp.mostpopular'

export const MY_MOVIES_STORAGE_KEY = 'MovieWebshopApp.my'