<? if(!defined('IN_MYMPS')) exit('Access Denied');
/*Mymps分类信息系统
官方网站：http://www.mymps.com.cn*/?>
<div class="footer">
<!--<p class="footer_01">
<a href="index.php?mod=index" class="footer_hover" rel="nofollow">手机版</a>
<a href="<?=$mymps_global['SiteUrl']?>/index.php?view=pc" rel="nofollow">电脑版</a>
</p>-->
    <div class="clear"></div>
<p class="footer_02">&copy;copyright<?=$mymps_global['SiteName']?><br /><?=$mymps_global['SiteBeian']?>&nbsp;&nbsp;</p>
<p class="footer_02" style="display:none"><?=$mymps_global['SiteStat']?></p>
</div>
<div class="windowIframe" id="windowIframe" style="display:none;">
<div class="header"><a href="javascript:;" class="back left8 close">返回</a><span id="windowIframeTitle"></span></div>
<div class="body" id="windowIframeBody"></div>
</div>
<script>var searchHtml='<div class="searchbar2">'+'<form id="myform" action="index.php?" method="get">'+'<input name="mod" type="hidden" value="search">'+'<input type="text" name="keywords" id="keyword" class="s_ipt" value="" placeholder="输入关键字" />'+'<input type="submit" class="s_btn po_ab" value="搜索">'+'</form></div>';function newPageSearch(){$('#windowIframe .back').show();$('#myform').submit(function(){if($('#keyword').val()===''){MSGwindowShow('index','0','请输入搜索关键字','','')}})}</script>