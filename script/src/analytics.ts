let uuid = ''

function uuidGen() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16))
}

function initAnalytics() {
    if (localStorage.getItem('uuid') === null) localStorage.setItem('uuid', uuidGen())

    uuid = localStorage.getItem('uuid')
}

function reportAccess(host: string, deployTime: string) {
    fetch(`${host}/api/v1/reportAccess?uuid=${uuid}&deploy_time=${deployTime}&target=${window.location.href}&user_agent=${window.navigator.userAgent}`).then(() => {
    })
}
