export function httpsCheck(link) {
    if (!link)     return null
    if(!link.startsWith("https")){
        return "https://" + link
    }
    return link
}