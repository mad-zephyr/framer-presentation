export const setWindowOverflow = (hidden: boolean) => {

	if(hidden) {
		document.body.style.cssText = 'overflow: hidden'
	} else {
		document.body.style.cssText = ''
	}
}