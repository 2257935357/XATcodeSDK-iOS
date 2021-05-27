function linkFix(orgHTML)  {
    orgHTML = orgHTML.replace(RegExp("<a", "g"), "\n<a")
    orgHTML = orgHTML.replace(RegExp("<a\n", "g"), "<a ")
    orgHTML = orgHTML.replace(RegExp("</a>", "g"), "</a>\n")
    orgHTML = orgHTML.replace(RegExp("<a href =", "g"), "<a href=")
    return orgHTML
}
