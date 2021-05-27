function getPcUrlFromMobile(href) {
    href = getPcUrlFromMobileSP(href)
    href = href.replace("://m.", "://www.")
    href = href.replace("://wap.", "://www.")
    return href
}

function getPcUrlFromMobileSP(href) {
    
    // zongheng.com
    // 目录
    if (href.startsWith("https://m.zongheng.com/h5/book?bookid=")) {
        var ary = href.split("=")
        var bookid = ary[1]
        return "http://book.zongheng.com/showchapter/" + bookid +".html"
    }
    // 正文
    if (href.startsWith("https://m.zongheng.com/h5/chapter?bookid=")) {
        var ary = href.split("=")
        var bookid = ary[1].split("&")[0], cid = ary[2].split("&")[0]
        return "http://book.zongheng.com/chapter/" + bookid + "/" + cid + ".html"
    }
    
    // slzww.com
    if (href.startsWith("https://m.slzww.com/b/")) {
        var ary = href.split("/")
        // 目录
        if (!href.endsWith(".html")) {
            var bookid = ary[4]
            var preId = bookidPre(bookid, 3)
            return "https://www.slzww.com/html/" + preId + "/" + bookid + "/"
        }

        // 正文
        var bookid = ary[4]
        var cid = ary[5].split(".")[0]
        var preId = bookidPre(bookid, 3)
        return "https://www.slzww.com/html/" + preId + "/" + bookid + "/" + cid + ".html"
    }
    
    // so.com
    if (href.startsWith("https://m.so.com/jump?")) {
        var u = href.split("u=")[1].split("&")[0]
        var url = decodeURIComponent(u)
        return getPcUrlFromMobile(url)
    }

    // lread.net
    if (href.startsWith("https://m.lread.net/book")) {
        var ary = href.split("/")
        // 目录
        if (ary.length == 5) {
            var bookid = ary[4].split(".")[0]
            return "https://www.lread.net/read/" + bookid + "/"
        }

        ary = href.split("-")
        href = ary[0]
        if (ary.length > 1) {
            href += "." + ary[1].split(".")[1]
        }

        return href.replace("https://m.lread.net/book/", "https://www.lread.net/read/")
    }
    
    // biqumo.com
    if (href.startsWith("https://m.biqumo.com/")) {
        var ary = href.split("/")
        ary[2] = "www.biqumo.com"
        ary[4] = ary[3] + "_" + ary[4]
        ary[3] = ""
        return ary.join("/").replace(".com//", ".com/")
    }

    // xs7.la
    if (href.startsWith("https://m.xs7.la/book")) {
        href = href.replace("https://m.xs7.la/book_", "https://www.xs7.la/book/")
        var ary = href.split("/")
        var bookid = ary[4]
        var preId = bookidPre(bookid, 3)
        ary[4] = preId + "_" + bookid

        return ary.join("/")
    }

    // boluoxs.com
    if (href.startsWith("https://m.boluoxs.com/")) {
        var ary = href.split("/")
        ary[2] = "www.boluoxs.com/biquge"
        // 目录
        if (ary.length == 5) {
            var bookid = ary[4].split(".")[0]
            var preId = bookidPre(bookid, 3)
            ary[3] = "" + preId
            ary[4] = bookid + "/"
            return ary.join("/")
        }

        //  正文
        var cid = ary[5].split(".")[0].split("_")[0]
        ary[5] = "xs" + cid + ".html"
        return ary.join("/")
    }

    // 778buy.com
    if (href.startsWith("http://m.778buy.com/")) {
        var ary = href.split("/")
        ary[2] = "www.778buy.com"
        ary[3] = ""
        var preId = bookidPre(ary[4], 3)
        ary[4] = preId + "_" + ary[4]
        return ary.join("/").replace(".com//", ".com/")
    }

    // 63xs.com
    if (href.startsWith("https://m.63xs.com/")) {
        var ary = href.split("/")
        ary[2] = "www.63xs.com"
        if(ary.length==6){
            var preId = bookidPre(ary[4], 3)
            ary[4] = preId + "/" + ary[4]
            if (ary[5].length > 0) {
                var cid = ary[5].split(".")[0].split("_")[0]
                ary[5] = cid + ".html"
            }
        }
        if(ary.length==4){
            bookinfo=ary[3].split("_")[0];
            return ary[0]+"//"+ary[2]+"/book/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"+ary[3].split("_")[1]
        }


        return ary.join("/")
    }

    // yikanxiaoshuo.com
    if (href.startsWith("https://m.yikanxiaoshuo.com/book/")) {
        var ary = href.split("/")
        var preId = bookidPre(ary[4], 3)
        ary[3] = preId
        return ary.join("/")
    }

    // slzww.com
    if (href.startsWith("https://www.slzww.com/slzwwtxt/")) {
        var ary = href.split("/")
        ary[2] = "www.slzww.com"
        ary[3] = "html"
        var bookid = ary[4].split(".")[0]
        var preId = bookidPre(bookid, 3)
        ary[4] = preId + "/" + bookid + "/"
        return ary.join("/")
    }
    
    // qiuwu.net
    if (href.startsWith("http://www.qiuwu.net/zzz/")) {
        var ary = href.split("/")
        ary[3] = "html"
        var preId = bookidPre(ary[4], 3)
        ary[4] = preId + "/" + ary[4]
        return ary.join("/")
    }

    // du1du.org
    if (href.startsWith("http://m.du1du.org") || href.startsWith("http://du1du.org")) {
        //内容
        var url = href.replace("m.du1du.org", "du1du.org");

        //目录
        if(!url.endsWith('.htm')){
            return url+'mulu.htm';
        }

        return url;
    }

    // qingdou.net
    if (href.startsWith("https://m.qingdou.net")) {
        var ary = href.split("/")
        if(ary[4].length>0){
            var bookid = ary[4].split(".")[0]
            return "https://www.qingdou.net/" + bookid + "/"
        }
        return href.replace("://m.", "://www.")
      
    }

    // ewenxue.org
    if (href.startsWith("http://ewenxue.org")) {
        var ary = href.split("/")
        if (ary.length == 6 && ary[5].length <= 0) {
            ary[5] = "mulu.htm"
            return ary.join("/")
        }
    }

    // shuyuewu.co
    if (href.startsWith("https://m.shuyuewu.co/")) {
        var ary = href.split("/")
        ary[2] = "www.shuyuewu.co"
        ary[4] = ary[3] + "_" + ary[4]
        ary[3] = ""
        href = ary.join("/").replace(".co//", ".co/")
        return href.split("?")[0]
    }

    // msxf.cn
    if (href.startsWith("https://m.msxf.cn/")) {
        if (href.endsWith("chapter.html")) {
            return href.replace("https://m.msxf.cn/", "https://www.zfbook.net/")
        }

        return href.replace("https://m.msxf.cn/", "http://www.msxf.cn/")
    }

    // bookxuan.com
    if (href.startsWith("http://wap.bookxuan.com/")) {
        if (href.endsWith(".html")) { // 正文
            return href.replace("http://wap.", "http://www.")
        }

        if(href.indexOf("_") == -1){
            return href.replace("http://wap.", "http://www.")
        }


        // 目录
        var ary = href.split("/")
        ary[2] = "www.bookxuan.com"
        var bookId = ary[4].split("_")[0]
        var preId = bookidPre(bookId, 3)
        ary[4] = preId + "/" + bookId
        return ary.join("/")
    }

    // v63xs.com
    if (href.startsWith("https://m.v63xs.com/")) {
        var ary = href.split("/")
        ary[2] = "www.v63xs.com"

        if (ary.length == 6) {
            // 目录
            if (ary[5].length <= 0 || ary[5].startsWith("index")) {
                var bookId = ary[4]
                var preId = bookidPre(bookId, 3)
                return "https://www.v63xs.com/book/" + preId + "/" + bookId + "/"
            }

            // 正文
            var cId = ary[5].split(".")[0]
            var bookId = ary[4]
            var preId = bookidPre(bookId, 3)
            return "https://www.v63xs.com/book/"+ preId +"/"+ bookId +"/"+ cId +".html"
        }

        // 正文2
        var infoAry = ary[3].split(".")[0].split("_")
        var bookId = infoAry[0]
        var cId = infoAry[1]
        var preId = bookidPre(bookId, 3)

        return "https://www.v63xs.com/book/"+ preId +"/"+ bookId +"/"+ cId +".html"
    }

    // 69shu.org
    if(href.startsWith("https://m.69shu.org/")){
        var ary = href.split("/")
        ary[2] = "www.69shu.org"
        if (ary.length == 5) {
            var bookinfo = ary[3].split("_")
            //正文
            if(ary[4] !='' && ary[4].endsWith(".html")){
                return ary[0]+"//"+ary[2]+"/book/"+bookinfo[1]+"/"+ary[4];
            }
            //目录
            return ary[0]+"//"+ary[2]+"/book/"+bookinfo[1]+"/";
        }
    }
    // shupu.org
    if(href.startsWith("https://m.shupu.org/") || href.startsWith("https://www.shupu.org/")){
        var ary =href.split("/")
        ary[2]="www.shupu.org"
        if(ary.length==5){
            if(ary[4]!=""){
                var bookinfo=ary[4].split(".")
                if(bookinfo[0].length>3){
                    return ary[0]+"//"+ary[2]+"/yuedu/"+bookinfo[0].substring(0,bookinfo[0].length-3)+"/"+bookinfo[0]+"/"
                }
            }
        }
    }
    // as16.com
    if(href.startsWith("http://m.as16.com/") || href.startsWith("http://www.as16.com/")){
        var ary =href.split("/")
        ary[2]="www.as16.com"
        if(ary.length==6){
            if(ary[4]!=""){
                var bookinfo=ary[4].split(".")
                if(bookinfo[0].length>3){
                    return ary[0]+"//"+ary[2]+"/xiaoshuo/"+bookinfo[0].substring(0,bookinfo[0].length-3)+"/"+bookinfo[0]+"/"
                }
            }
        }
    }
    // m.qqxs.cc
    if(href.startsWith("https://m.qqxs.cc/") || href.startsWith("https://www.qqxs.cc/")){
        var ary =href.split("/")
        ary[2]="www.qqxs.cc"
        if(ary.length==5){
            if(ary[3]!=""){
                var bookinfo=ary[3].split("_")
                if(bookinfo[1].length>3){
                    return ary[0]+"//"+ary[2]+"/xs/"+bookinfo[1].substring(0,bookinfo[1].length-3)+"/"+bookinfo[1]+"/"+ary[4]
                }
            }
        }
    }
    //m.bxwxorg.com
    if(href.startsWith("https://m.bxwxorg.com/") ){
         var ary =href.split("/")
         ary[2]="www.bxwxorg.com"
            if(ary.length==6){
                var bookinfo=ary[4].split(".")[0]
                    return ary[0]+"//"+ary[2]+"/read/"+bookinfo+"/"+ary[5]
            }
            if(ary.length==5){
                return ary[0]+"//"+ary[2]+"/read/"+ary[4].split(".")[0]+"/"
            }
  
    }
    //m.shouda8.com
    if(href.startsWith("https://m.shouda8.com/")){
         var ary =href.split("/")
         ary[2]="www.shouda8.com"
        if(ary.length==5){
            if(ary[3].startsWith("shu_")){
                var bookinfo=ary[3].split("_")[1].split(".")[0]
                    return ary[0]+"//"+ary[2]+"/"+bookinfo+"/"+ary[4]
            }
            return ary[0]+"//"+ary[2]+"/"+ary[3].split("_")[0]+"/"+ary[4]
        }
        if(ary.length==4){
            return ary[0]+"//"+ary[2]+"/"+ary[3].split("_")[1].split(".")[0]+"/"
        }
    }
    // wap.xsbiquge.com
    if(href.startsWith("https://wap.xsbiquge.com")){
        return href.replace("://wap.", "://www.")
    }
    //m.biyuwu.cc
    if(href.startsWith("https://m.biyuwu.cc/")){
         var ary =href.split("/")
         ary[2]="www.biyuwu.cc"
        if(ary.length==6){
            if(ary[4]!=""){
                var bookinfo=ary[4].substring(0,ary[4].length-3)
                if(ary[4].length>3){
                    if(/^[0-9]+$/.test(bookinfo)){
                        return ary[0]+"//"+ary[2]+"/html/"+bookinfo+"/"+ary[4]+"/"
                    }
                    return ary[0]+"//"+ary[2]+"/html/"+"0"+"/"+ary[4]+"/"
                }
            }
        }
    }
    //m.booktxt.net
    if(href.startsWith("https://m.booktxt.net/") ){
        var ary =href.split("/")
        ary[2]="www.booktxt.net"
        if(ary.length==5){
            var bookinfo=ary[4].split(".")[0].split("_")[0]
            if(bookinfo.length>3){
                return ary[0]+"//"+ary[2]+"/"+bookinfo.substring(0,bookinfo.length-3)+"_"+bookinfo+"/"
            }
            return ary[0]+"//"+ary[2]+"/"+0+"_"+bookinfo+"/"
        }
  
    }
    //m.biqiwu.com
    if(href.startsWith("https://m.biqiwu.com/") ){
         var ary =href.split("/")
         ary[2]="www.biqiwu.com"
            if(ary.length==6){
                var bookinfo=ary[4].substring(0,ary[4].length-3)
                return ary[0]+"//"+ary[2]+"/b/"+bookinfo+"/"+ary[4]+"/"+ary[5]
            }
    }
    //wap-bxwxorg-com.sm-tc.cn
    if(href.startsWith("https://wap-bxwxorg-com.sm-tc.cn/") ){
         var ary =href.split("/")
         ary[2]="www.bxwxorg.com"
            if(ary.length==8){
                var bookinfo=ary[7].split(".")[0]
                return ary[0]+"//"+ary[2]+"/read/"+bookinfo+"/"
            }
            if(ary.length==9){
                return ary[0]+"//"+ary[2]+"/read/"+ary[7]+"/"
            }
    }
    //m.8zwdu.com
    if(href.startsWith("https://m.8zwdu.com/") ){
         var ary =href.split("/")
         ary[2]="www.8zwdu.com"
         if(ary.length==6){
            var bookinfo=ary[4]
            if(bookinfo.length>3){
                return ary[0]+"//"+ary[2]+"/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"
            }
            return ary[0]+"//"+ary[2]+"/"+0+"/"+bookinfo+"/"
        }
    }
    //m.booktxt.com
    if(href.startsWith("https://m.booktxt.com/") ){
        var ary =href.split("/")
        ary[2]="www.booktxt.com"
        if(ary.length==5){
            var bookinfo=ary[4].split(".")[0];
            if(bookinfo.length>3){
                return ary[0]+"//"+ary[2]+"/"+bookinfo.substring(0,bookinfo.length-3)+"_"+bookinfo+"/"
            }
            return ary[0]+"//"+ary[2]+"/"+0+"_"+bookinfo+"/"
        }
    }
    //wap.xsbiquge.com
    if(href.startsWith("https://wap.xsbiquge.com/") ){
        href= href.replace("://wap.", "://www.")
    return
    }
    //wap-shouda8-com.sm-tc.cn
    if(href.startsWith("https://wap-shouda8-com.sm-tc.cn/") ){
        var ary =href.split("/")
        ary[2]="www.shouda8.com"
        if(ary.length==7){
            var bookinfo=ary[6].split(".")[0].split("_")[1]
                return ary[0]+"//"+ary[2]+"/"+bookinfo+"/"
        }
    }
    //wm.liudatxt.com
    if(href.startsWith("http://m.liudatxt.com/") ){
         var ary =href.split("/")
         ary[2]="www.liudatxt.com"
                    return ary[0]+"//"+ary[2]+"/so/"+ary[3]+"/"
            
    }
    //m.zhuaji.org
    if(href.startsWith("https://m.zhuaji.org/") ){
        var ary =href.split("/")
        ary[2]="www.zhuaji.org"
        if(ary.length==6){
            return ary[0]+"//"+ary[2]+"/read/"+ary[4]+"/"+ary[5]+".html"
        }
        if(ary.length==5){
            return ary[0]+"//"+ary[2]+"/read/"+ary[4]+"/"
        }
    }
    //wap-qingdou-net.sm-tc.cn
    if(href.startsWith("https://wap-qingdou-net.sm-tc.cn/") ){
        var ary =href.split("/")
        ary[2]="www.qingdou.net"
        if(ary.length==7){
            if(ary[6].length>0){
                return ary[0]+"//"+ary[2]+"/"+ary[6].split(".")[0]+"/"
            }
            return ary[0]+"//"+ary[2]+"/"+ary[5]+"/"
        }
        if(ary.length==8){
            return ary[0]+"//"+ary[5]+"/"+ary[7].split(".")[0]+"/"
        }
    }
    //www.bxwxorg.com
    if(href.startsWith("https://www.bxwxorg.com/") || href.startsWith("http://www.bxwxorg.com/") ){
        var ary =href.split("/")
        ary[2]="www.bxwxorg.com"
        if(ary.length==5){
            return "https:"+"//"+ary[2]+"/read/"+ary[4].split(".")[0]+"/"
        }
    }
    // wap.yb3.cc
    if(href.startsWith("https://wwap.yb3.cc")){
       return href.replace("://wap.", "://www.")
    }
    //m.du00.com
    if(href.startsWith("https://m.du00.com/") ){
        var ary =href.split("/")
        ary[2]="www.du00.com"
        if(ary.length==5){
            bookinfo=ary[4].split(".")[0]
            return ary[0]+"//"+ary[2]+"/read/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/index.html"
        }
    }
    //m.heiyan.org
    if(href.startsWith("http://m.heiyan.org/") ){
        var ary =href.split("/")
        ary[2]="www.heiyan.org"
        if(ary.length==5){
            bookinfo=ary[4].split("_")[0]
            if(bookinfo=="list"||bookinfo==""){
            return ary[0]+"//"+ary[2]+"/"+ary[3]+"/"
            }
            return ary[0]+"//"+ary[2]+"/"+ary[3]+"/"+bookinfo+".html"
        }
    }
    //m-hunhun520-com.sm-tc.cn
    if(href.startsWith("https://m-hunhun520-com.sm-tc.cn/") ){
        var ary =href.split("/")
        ary[2]="www.hunhun520.com"
        if(ary.length==9){
            return ary[0]+"//"+ary[2]+"/book/"+ary[7]+"/"
        }
        
    }
    //m.yxgxz.com
    if(href.startsWith("http://m.yxgxz.com/") ){
        var ary =href.split("/")
        ary[2]="www.yxgxz.com"
        if(ary.length==5){
            bookinfo=ary[3].split("-")[1]
            return ary[0]+"//"+ary[2]+"/"+bookinfo.substring(0,bookinfo.length-3)+"_"+bookinfo+"/"
        }
    }
    //mip.wanbentxt.com
    if(href.startsWith("https://mip.wanbentxt.com/") ){
        return href.replace("://mip.", "://www.")
    }
    //m.qilinchess.com
    if(href.startsWith("https://m.qilinchess.com/") ){
        var ary =href.split("/")
        ary[2]="qilinchess.com"
        if(ary.length==5){
            bookinfo=ary[4].split(".")[0]
            return ary[0]+"//"+ary[2]+"/html/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"
        }
        if(ary.length==6){
            return ary[0]+"//"+ary[2]+"/html/"+ary[3]+"/"+ary[4]+"/";
        }
    }
    //m.v63xs.com
    if(href.startsWith("https://m.v63xs.com") ){
        var ary =href.split("/")
        ary[2]="www.v63xs.com"
        if(ary.length==6){
            if(ary[5].length>3){
                return ary[0]+"//"+ary[2]+"/"+ary[5].substring(0,ary[5].length-3)+"_"+ary[5]+"/"
            }
        }
    }
    //m.wodeshucheng.com
    if(href.startsWith("https://m.wodeshucheng.com") ){
        return href.replace("://m.", "://www.")
    }
    //ewenxue.net
    if(href.startsWith("https://ewenxue.net") ||href.startsWith("http://ewenxue.net") ){
        var ary =href.split("/")
        ary[0]="http:"
        ary[2]="ewenxue.org"
        if(ary.length==6){
            return ary[0]+"//"+ary[2]+"/xs/"+ary[4]+"/mulu.htm"
        }
    }
    //m.23hh.com
    if(href.startsWith("https://m.23hh.com")){
        return href.replace("://m.", "://www.")
    }
    //m.hongyeshuzhai.com
    if(href.startsWith("https://m.hongyeshuzhai.com")){
        return href.replace("://m.", "://www.").replace("wapbook/","wapbook").replace("wapbook","shuzhai/")
    }
    //m.mengyuanshucheng.com
    if(href.startsWith("https://m.mengyuanshucheng.com")){
        return href.replace("://m.", "://www.").replace("my/","index/")
    }
    //m.xiaoshuodaquan.com
    if(href.startsWith("http://m.xiaoshuodaquan.com") ){
        var ary =href.split("/")
        ary[0]="https:"
        ary[2]="www.xiaoshuodaquan.com"
        if(ary.length==4){
            if(href.endsWith("b_i0.htm")){
                return ary[0]+"//"+ary[2]+"/shizongzui2/"
            }
            if(href.endsWith("b_jrd.htm")){
                return ary[0]+"//"+ary[2]+"/ganshijiumei/"
            }
        }
        return ary[0]+"//"+ary[2]+"/"+ary[3]+"/"
    }
    //m.booktxt.com
    if(href.startsWith("https://m.booktxt.com") ){
        var ary =href.split("/")
        ary[2]="www.booktxt.com"
        if(ary.length==5){
            if(ary[4].length>3){
                return ary[0]+"//"+ary[2]+"/"+ary[5].substring(0,ary[5].length-3)+"_"+ry[5]+"/"
            }
            return ary[0]+"//"+ary[2]+"/0_"+ry[5]+"/"
        }
    }
    //mip-zhuidu-cc.sm-tc.cn
    if(href.startsWith("https://mip-zhuidu-cc.sm-tc.cn") ){
        var ary =href.split("/")
        ary[5]="www.zhuidu.cc"
        if(ary.length==8){
            return ary[0]+"//"+ary[5]+"/"+ary[6]+"/"
  
        }
    }
    //m.xwxguan.com
    if(href.startsWith("https://m.xwxguan.com") ){
        return href.replace("://m.", "://www.").replace("xwxguan","wxguan")
    }
    //lewen123.com
    if(href.startsWith("http://lewen123.com") ){
        var ary =href.split("/")
        if(ary.length==5){
            bookinfo=ary[4].split(".")[0]
                return "http://lewen123.com/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/index.html"
        }
    }
    //m.aikanshu8.com
    if(href.startsWith("https://m.aikanshu8.com") ){
        return href.replace("://m.", "://www.")
    }
    //m.50zw.net
    if(href.startsWith("https://m.50zw.net") ){
        return href.replace("://m.", "://www.").replace("/book_","/zw_")
    }
    //m.x81zw.com
    if(href.startsWith("https://m.x81zw.com") ){
        return href.replace("://m.", "://www.")
    }
    //wap.xaixs.org
    if(href.startsWith("http://wap.xaixs.org") ){
        var ary =href.split("/")
        ary[2]="www.xaixs.org"
        if(ary.length==5){
            bookinfo=ary[4].split(".")[0]
            return ary[0]+"//"+ary[2]+"/xs/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"
        }
    }
    //m.miaoshuwu.com
    if(href.startsWith("https://m.miaoshuwu.com") ){
        var ary =href.split("/")
        ary[2]="www.miaoshuwu.com"
        if(ary.length==5){
            bookinfo=ary[3].split("_")
            return ary[0]+"//"+ary[2]+"/"+bookinfo[0]+"/"+bookinfo[1]+"/"
        }
    }
    //m.biqufu.com
    if(href.startsWith("http://m.biqufu.com") ){
        return href.replace("://m.", "://www.")
    }
    //m.8bqg.net
    if(href.startsWith("https://m.8bqg.net") ){
        return href.replace("://m.", "://www.")
    }
    //m.shukeju.com
    if(href.startsWith("https://m.shukeju.com") ){
        return href.replace("://m.", "://www.")
    }
    //m.yqxs.cc
    if(href.startsWith("https://m.yqxs.cc") ){
        return href.replace("://m.", "://www.")
    }
    //m.666wx.cc
    if(href.startsWith("http://m.666wx.cc") ){
        return href.replace("://m.", "://www.").replace("/book/","/txt/")
    }
    //m.jpxs.org
    if(href.startsWith("https://m.jpxs.org") ){
        var ary =href.split("/")
        ary[2]="www.jpxs.org"
        if(ary.length==5){
            bookinfo=ary[3].split("-")[1]
            return ary[0]+"//"+ary[2]+"/"+bookinfo.substring(0,bookinfo.length-3)+"_"+bookinfo+"/"
        }
    }
    //m.shuyuewu.co
    if(href.startsWith("https://m.shuyuewu.co") ){
        var ary =href.split("/")
        ary[2]="www.shuyuewu.co"
        if(ary.length==6){
            return ary[0]+"//"+ary[2]+"/"+ary[3]+"_"+ary[4]+"/"
        }
    }
    //m.ddxsku.com
    if(href.startsWith("http://m.ddxsku.com") ){
        var ary =href.split("/")
        ary[2]="www.ddxsku.com"
        if(ary.length==5){
            bookinfo=ary[4].split(".")[0]
            return ary[0]+"//"+ary[2]+"/files/article/html/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/index.html"
        }
    }
    //m.58xs.com
    if(href.startsWith("http://m.58xs.com") ){
        return href.replace("://m.", "://www.")
    }
    //m.biquge.info
    if(href.startsWith("http://m.biquge.info") ){
        var ary =href.split("/")
        ary[2]="www.biquge.info"
        if(ary.length==5){
            return ary[0]+"//"+ary[2]+"/"+ary[3]+"/"
        }
    }
    //wap.biqukan.com
    if(href.startsWith("https://wap.biqukan.com") ){
        var ary =href.split("/")
        ary[2]="www.biqukan.com"
        if(ary.length==6){
            return ary[0]+"//"+ary[2]+"/"+ary[3]+"_"+ary[4]+"/"
        }
    }
    //mip-kygso-com.sm-tc.cn
    if(href.startsWith("https://mip-kygso-com.sm-tc.cn") ){
        var ary =href.split("/")
        ary[2]="www.kygso.com"
        if(ary.length==9){
            return ary[0]+"//"+ary[2]+"/wapnovel/"+ary[7]+"/"
        }
    }
    //m.iqishu.la
    if(href.startsWith("http://m.iqishu.la") ){
        var ary =href.split("/")
        ary[2]="www.iqishu.la"
        if(ary.length==4){
            bookinfo=ary[3].split(".")[0].replace("Shtml","")
            return ary[0]+"//"+ary[2]+"/du/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"
        }
    }
    //m.qqxs.cc
    if(href.startsWith("https://www.qqxs.cc") ){
        var ary =href.split("/")
        ary[2]="www.qqxs.cc"
        if(ary.length==5){
            bookinfo=ary[4].split("_")[1]
            return ary[0]+"//"+ary[2]+"/xs/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"
        }
    }
    //m.xinqingdou.com
    if(href.startsWith("https://m.xinqingdou.com") ){
        var ary =href.split("/")
        ary[2]="www.xinqingdou.com"
        if(ary.length==5){
            bookinfo=ary[4].split(".")[0]
            return ary[0]+"//"+ary[2]+"/"+bookinfo+"/"
        }
    }
    //m.hunhun520.com
    if(href.startsWith("https://m.hunhun520.com") ){
        return href.replace("https://m.","https://www.")
        }
    //wap.xxbiquge.com
    if(href.startsWith("https://wap.xxbiquge.com") ){
       return href.replace("://wap.xxbiquge","://www.xsbiquge")
    }


    //www.58xs.com
    if(href.startsWith("http://www.58xs.com") ){
        return href.replace("/index.html","/")
     }


    //m.630book.cc
    if(href.startsWith("http://m.630book.cc") ){
        var ary =href.split("/")
        ary[2]="www.630book.cc"
        if(ary.length==5){
            bookinfo=ary[3].split("_")[1]
            return ary[0]+"//"+ary[2]+"/shu/"+bookinfo+".html"
        }
    }

    //wap.lrxsw.org
    if(href.startsWith("http://wap.lrxsw.org") ){
        var ary =href.split("/")
        ary[2]="www.lrxsw.org"
        if(ary.length==7){
            bookinfo=ary[6].split("_")[0]
            return ary[0]+"//"+ary[2]+"/html/"+ary[4]+"/"+ary[5]+"/"+bookinfo+".html"
        }
     }


    //wap.shouda8.com
    if(href.startsWith("https://wap.shouda8.com") ){
        var ary =href.split("/")
        ary[2]="www.shouda8.com"
        if(ary.length==4){
            bookinfo=ary[3].split("_")[1].split(".")[0]
            return ary[0]+"//"+ary[2]+"/"+bookinfo+"/"
        }
    }

    // xiashuwu.com
    if(href.indexOf("xiashuwu.com") !== -1) {
        href = href.replace("://m.", "://www.")
        if (href.endsWith("/")) {
            href += "chapters.html"
        }
    }

    // m.bxwx.io
    if(href.startsWith("https://m.bxwx.io") ){
       return href = href.replace("://m.", "://www.")
    }
    // m.18xs.org
    if(href.startsWith("https://m.18xs.org") ){
       return href = href.replace("://m.", "://www.").replace("/mip-book_","/book_")
    
    }
    //i.258zw.com
    if(href.startsWith("https://i.258zw.com") ){
        var ary =href.split("/")
        ary[2]="www.258zw.com"
        if(ary.length==5){
            bookinfo=ary[3].split("-")[1]
            return ary[0]+"//"+ary[2]+"/html/"+bookinfo+"/"
        }
    }
    // m.800xiaoshuo.net
    if(href.startsWith("https://m.800xiaoshuo.net") ){
       return href = href.replace("://m.", "://www.")
    }
    // m.jiya168.com
    if(href.startsWith("http://m.jiya168.com") ){
        var ary =href.split("/")
        ary[2]="www.jiya168.com"
        if(ary.length==6){
            bookinfo=ary[3].split("-")[1]
            return "https://"+ary[2]+"/book"+ary[4]+".html"
        }
    }
    //m.wangshugu.com
    if(href.startsWith("http://m.wangshugu.com") ){
        var ary =href.split("/")
        ary[2]="www.wangshugu.com"
        if(ary.length==5){
            bookinfo=ary[3].split("-")[1]
            return ary[0]+"//"+ary[2]+"/books/"+bookinfo.substring(0,bookinfo.length-3)+"/"+bookinfo+"/"
        }
    }

    // m.yibige.la
    if(href.startsWith("https://m.yibige.la") ){
       return href = href.replace("://m.", "://www.")
    }

    // m.23txt.com
    if(href.startsWith("https://m.23txt.com") ){
       return href = href.replace("://m.", "://www.")
    }
    // m.qushuba.com
    if(href.startsWith("http://m.qushuba.com") ){
       return href = href.replace("://m.", "://www.")
    }



    return href
}

function bookidPre(bookid, suf) {
    var len = bookid.length
    var preId = len<=suf ? "0" : bookid.substring(0, len-suf)
    return preId
}
