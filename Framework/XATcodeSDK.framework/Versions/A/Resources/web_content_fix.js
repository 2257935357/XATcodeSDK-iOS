function contentFix(orgHTML) {
    orgHTML = orgHTML.replace(RegExp("本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。", "g"), "")
    orgHTML = orgHTML.replace(RegExp("情节跌宕起伏、扣人心弦，是一本情节与文笔俱佳", "g"), "")
    orgHTML = orgHTML.replace(RegExp("            ", "g"), "")
    orgHTML = orgHTML.replace(RegExp("@@", "g"), "")

    orgHTML = orgHTML.replace(RegExp("&emsp;", "g"), "  ")
    orgHTML = orgHTML.replace(RegExp("&nbsp;", "g"), " ")
    orgHTML = orgHTML.replace(RegExp("&nbsp", "g"), " ")
    orgHTML = orgHTML.replace(RegExp("\r\n", "g"), "\n")
    orgHTML = orgHTML.replace(RegExp("\r", "g"), "\n")
    orgHTML = orgHTML.replace(RegExp("<br>", "g"), "\n")
    orgHTML = orgHTML.replace(RegExp("<br/>", "g"), "\n")
    orgHTML = orgHTML.replace(RegExp("<br />", "g"), "\n")
    orgHTML = orgHTML.replace(RegExp("<p>", "g"), "\n")
    orgHTML = orgHTML.replace(RegExp("</p>", "g"), "\n")
    
    for (var i = 0; i < 4; ++i) {
        orgHTML = orgHTML.replace(RegExp("\n\n", "g"), "\n")
    }
    return orgHTML
}
