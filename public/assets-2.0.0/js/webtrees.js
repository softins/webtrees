"use strict";function expand_layer(e){return $("#"+e+"_img").toggleClass("icon-plus icon-minus"),$("#"+e).slideToggle("fast"),$("#"+e+"-alt").toggle(),!1}function accept_changes(e){return $.post("action.php",{action:"accept-changes",xref:e,ged:WT_GEDCOM},function(){location.reload()}),!1}function reject_changes(e){return $.post("action.php",{action:"reject-changes",xref:e,ged:WT_GEDCOM},function(){location.reload()}),!1}function delete_record(e,t,n){return confirm(e)&&$.post("action.php",{action:"delete-record",xref:t,ged:void 0===n?WT_GEDCOM:n},function(){location.reload()}),!1}function delete_fact(e,t,n){return confirm(e)&&$.post("action.php",{action:"delete-fact",xref:t,fact_id:n,ged:WT_GEDCOM},function(){location.reload()}),!1}function unlink_media(e,t,n){return confirm(e)&&$.post("action.php",{action:"unlink-media",source:t,target:n,ged:WT_GEDCOM},function(){location.reload()}),!1}function copy_fact(e,t){return $.post("action.php",{action:"copy-fact",xref:e,fact_id:t,ged:WT_GEDCOM},function(){location.reload()}),!1}function paste_fact(e,t){return $.post("action.php",{action:"paste-fact",xref:e,fact_id:$(t).val(),ged:WT_GEDCOM},function(){location.reload()}),!1}function delete_user(e,t){return confirm(e)&&$.post("action.php",{action:"delete-user",user_id:t},function(){location.reload()}),!1}function masquerade(e){return $.post("action.php",{action:"masquerade",user_id:e},function(){location.reload()}),!1}function addmedia_links(e,t,n){return pastefield=e,insertRowToTable(t,n),!1}function valid_date(e){var t=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],n=["MUHAR","SAFAR","RABIA","RABIT","JUMAA","JUMAT","RAJAB","SHAAB","RAMAD","SHAWW","DHUAQ","DHUAH"],o=["TSH","CSH","KSL","TVT","SHV","ADR","ADS","NSN","IYR","SVN","TMZ","AAV","ELL"],a=["VEND","BRUM","FRIM","NIVO","PLUV","VENT","GERM","FLOR","PRAI","MESS","THER","FRUC","COMP"],l=["FARVA","ORDIB","KHORD","TIR","MORDA","SHAHR","MEHR","ABAN","AZAR","DEY","BAHMA","ESFAN"],i=e.value,s=i.split("("),c="";if(s.length>1&&(i=s[0],c=s[1]),i=i.toUpperCase(),i=i.replace(/\s+/," "),i=i.replace(/(^\s)|(\s$)/,""),i=i.replace(/(\d)([A-Z])/,"$1 $2"),i=i.replace(/([A-Z])(\d)/,"$1 $2"),i.match(/^Q ([1-4]) (\d\d\d\d)$/)&&(i="BET "+t[3*RegExp.$1-3]+" "+RegExp.$2+" AND "+t[3*RegExp.$1-1]+" "+RegExp.$2),i.match(/^(@#DHIJRI@|HIJRI)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(i="@#DHIJRI@"+RegExp.$2+n[parseInt(RegExp.$3,10)-1]+RegExp.$4),i.match(/^(@#DJALALI@|JALALI)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(i="@#DJALALI@"+RegExp.$2+l[parseInt(RegExp.$3,10)-1]+RegExp.$4),i.match(/^(@#DHEBREW@|HEBREW)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(i="@#DHEBREW@"+RegExp.$2+o[parseInt(RegExp.$3,10)-1]+RegExp.$4),i.match(/^(@#DFRENCH R@|FRENCH)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(i="@#DFRENCH R@"+RegExp.$2+a[parseInt(RegExp.$3,10)-1]+RegExp.$4),/^([^\d]*)(\d+)[^\d](\d+)[^\d](\d+)$/i.exec(i)){var r=RegExp.$1,d=parseInt(RegExp.$2,10),u=parseInt(RegExp.$3,10),p=parseInt(RegExp.$4,10),f="DMY";"undefined"!=typeof locale_date_format&&("MDY"!==locale_date_format&&"YMD"!==locale_date_format||(f=locale_date_format));var m=(new Date).getFullYear(),h=m%100,g=m-h;"DMY"===f&&d<=31&&u<=12||d>13&&d<=31&&u<=12&&p>31?i=r+d+" "+t[u-1]+" "+(p>=100?p:p<=h?p+g:p+g-100):"MDY"===f&&d<=12&&u<=31||u>13&&u<=31&&d<=12&&p>31?i=r+u+" "+t[d-1]+" "+(p>=100?p:p<=h?p+g:p+g-100):("YMD"===f&&u<=12&&p<=31||p>13&&p<=31&&u<=12&&d>31)&&(i=r+p+" "+t[u-1]+" "+(d>=100?d:d<=h?d+g:d+g-100))}i=i.replace(/^[>]([\w ]+)$/,"AFT $1"),i=i.replace(/^[<]([\w ]+)$/,"BEF $1"),i=i.replace(/^([\w ]+)[-]$/,"FROM $1"),i=i.replace(/^[-]([\w ]+)$/,"TO $1"),i=i.replace(/^[~]([\w ]+)$/,"ABT $1"),i=i.replace(/^[*]([\w ]+)$/,"EST $1"),i=i.replace(/^[#]([\w ]+)$/,"CAL $1"),i=i.replace(/^([\w ]+) ?- ?([\w ]+)$/,"BET $1 AND $2"),i=i.replace(/^([\w ]+) ?~ ?([\w ]+)$/,"FROM $1 TO $2"),i=i.replace(/(JANUARY)/,"JAN"),i=i.replace(/(FEBRUARY)/,"FEB"),i=i.replace(/(MARCH)/,"MAR"),i=i.replace(/(APRIL)/,"APR"),i=i.replace(/(MAY)/,"MAY"),i=i.replace(/(JUNE)/,"JUN"),i=i.replace(/(JULY)/,"JUL"),i=i.replace(/(AUGUST)/,"AUG"),i=i.replace(/(SEPTEMBER)/,"SEP"),i=i.replace(/(OCTOBER)/,"OCT"),i=i.replace(/(NOVEMBER)/,"NOV"),i=i.replace(/(DECEMBER)/,"DEC"),i=i.replace(/(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)\.? (\d\d?)[, ]+(\d\d\d\d)/,"$2 $1 $3"),i=i.replace(/(^| )(\d [A-Z]{3,5} \d{4})/,"$10$2"),c&&(i=i+" ("+c),e.value!==i&&(e.value=i)}function show_submenu(e,t){var n=document.body.scrollWidth+document.documentElement.scrollLeft,o=document.getElementById(e);if(o&&o.style){document.all?n=document.body.offsetWidth:(n=document.body.scrollWidth+document.documentElement.scrollLeft-55,"rtl"===textDirection&&o.offsetLeft+o.offsetWidth+10);for(var a=0,l=o.childNodes.length,i=0;i<l;i++){var s=o.childNodes[i];s.offsetWidth>a+5&&(a=s.offsetWidth)}o.offsetWidth<a&&(o.style.width=a+"px");var c;if((c=document.getElementById(t))&&(o.style.left=c.style.left,o.offsetLeft+o.offsetWidth+10>n)){var r=n-o.offsetWidth;o.style.left=r+"px"}o.offsetLeft<0&&(o.style.left="0px"),o.offsetHeight>500&&(o.style.height="400px",o.style.overflow="auto"),o.style.visibility="visible"}clearTimeout(menutimeouts[e]),menutimeouts[e]=null}function hide_submenu(e){if("number"==typeof menutimeouts[e]){var t=document.getElementById(e);t&&t.style&&(t.style.visibility="hidden"),clearTimeout(menutimeouts[e]),menutimeouts[e]=null}}function timeout_submenu(e){"number"!=typeof menutimeouts[e]&&(menutimeouts[e]=setTimeout("hide_submenu('"+e+"')",100))}function statusDisable(e){var t=document.getElementById(e);t.checked=!1,t.disabled=!0}function statusEnable(e){document.getElementById(e).disabled=!1}function statusChecked(e){document.getElementById(e).checked=!0}function cal_setMonthNames(e,t,n,o,a,l,i,s,c,r,d,u){monthLabels[1]=e,monthLabels[2]=t,monthLabels[3]=n,monthLabels[4]=o,monthLabels[5]=a,monthLabels[6]=l,monthLabels[7]=i,monthLabels[8]=s,monthLabels[9]=c,monthLabels[10]=r,monthLabels[11]=d,monthLabels[12]=u}function cal_setDayHeaders(e,t,n,o,a,l,i){daysOfWeek[0]=e,daysOfWeek[1]=t,daysOfWeek[2]=n,daysOfWeek[3]=o,daysOfWeek[4]=a,daysOfWeek[5]=l,daysOfWeek[6]=i}function cal_setWeekStart(e){e>=0&&e<7&&(weekStart=e)}function calendarWidget(e,t){var n=document.getElementById(e),o=document.getElementById(t);if("visible"===n.style.visibility)return n.style.visibility="hidden",!1;if("show"===n.style.visibility)return n.style.visibility="hide",!1;var a,l=/((\d+ (JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC) )?\d+)/i;return a=l.exec(o.value)?new Date(RegExp.$1):new Date,n.innerHTML=cal_generateSelectorContent(t,e,a),"hidden"===n.style.visibility?(n.style.visibility="visible",!1):"hide"===n.style.visibility&&(n.style.visibility="show",!1)}function cal_generateSelectorContent(e,t,n){var o,a,l='<table border="1"><tr>';for(l+='<td><select class="form-control" id="'+e+'_daySelect" onchange="return cal_updateCalendar(\''+e+"', '"+t+"');\">",o=1;o<32;o++)l+='<option value="'+o+'"',n.getDate()===o&&(l+=' selected="selected"'),l+=">"+o+"</option>";for(l+="</select></td>",l+='<td><select class="form-control" id="'+e+'_monSelect" onchange="return cal_updateCalendar(\''+e+"', '"+t+"');\">",o=1;o<13;o++)l+='<option value="'+o+'"',n.getMonth()+1===o&&(l+=' selected="selected"'),l+=">"+monthLabels[o]+"</option>";for(l+="</select></td>",l+='<td><input class="form-control" type="text" id="'+e+'_yearInput" size="5" value="'+n.getFullYear()+'" onchange="return cal_updateCalendar(\''+e+"', '"+t+"');\" /></td></tr>",l+='<tr><td colspan="3">',l+='<table width="100%">',l+="<tr>",a=weekStart,o=0;o<7;o++)l+="<td ",l+='class="descriptionbox"',l+=">",l+=daysOfWeek[a],l+="</td>",++a>6&&(a=0);l+="</tr>";var i=new Date(n.getFullYear(),n.getMonth(),1),s=i.getDay();s-=weekStart;for(i=i.getTime()-864e5*s+432e5,i=new Date(i),a=0;a<6;a++){for(l+="<tr>",o=0;o<7;o++){l+="<td ",i.getMonth()===n.getMonth()?i.getDate()===n.getDate()?l+='class="descriptionbox"':l+='class="optionbox"':l+='style="background-color:#EAEAEA; border: solid #AAAAAA 1px;"',l+='><a href="#" onclick="return cal_dateClicked(\''+e+"', '"+t+"', "+i.getFullYear()+", "+i.getMonth()+", "+i.getDate()+');">',l+=i.getDate(),l+="</a></td>";var c=i.getTime()+864e5;i=new Date(c)}l+="</tr>"}return l+="</table>",l+="</td></tr>",l+="</table>"}function cal_setDateField(e,t,n,o){var a=document.getElementById(e);return!!a&&(o<10&&(o="0"+o),a.value=o+" "+monthShort[n+1]+" "+t,!1)}function cal_updateCalendar(e,t){var n=document.getElementById(e+"_daySelect");if(!n)return!1;var o=document.getElementById(e+"_monSelect");if(!o)return!1;var a=document.getElementById(e+"_yearInput");if(!a)return!1;var l=parseInt(o.options[o.selectedIndex].value,10);l-=1;var i=new Date(a.value,l,n.options[n.selectedIndex].value);cal_setDateField(e,i.getFullYear(),i.getMonth(),i.getDate());var s=document.getElementById(t);return s?(s.innerHTML=cal_generateSelectorContent(e,t,i),!1):(alert("no dateDiv "+t),!1)}function cal_dateClicked(e,t,n,o,a){return cal_setDateField(e,n,o,a),calendarWidget(t,e),!1}function openerpasteid(e){window.opener.paste_id&&window.opener.paste_id(e),window.close()}function paste_id(e){pastefield.value=e}function pastename(e){nameElement&&(nameElement.innerHTML=e),remElement&&(remElement.style.display="block")}function paste_char(e){document.selection?(pastefield.focus(),document.selection.createRange().text=e):pastefield.selectionStart||0===pastefield.selectionStart?(pastefield.value=pastefield.value.substring(0,pastefield.selectionStart)+e+pastefield.value.substring(pastefield.selectionEnd,pastefield.value.length),pastefield.selectionStart=pastefield.selectionEnd=pastefield.selectionStart+e.length):pastefield.value+=e,"NPFX"!==pastefield.id&&"GIVN"!==pastefield.id&&"SPFX"!==pastefield.id&&"SURN"!==pastefield.id&&"NSFX"!==pastefield.id||updatewholename()}function ilinkitem(e,t,n){return n=void 0===n?WT_GEDCOM:n,window.open("inverselink.php?mediaid="+encodeURIComponent(e)+"&linkto="+encodeURIComponent(t)+"&ged="+encodeURIComponent(n),"_blank",find_window_specs),!1}function persistent_toggle(e,t){var n=document.getElementById(e),o=document.querySelectorAll(t),a=localStorage.getItem(e);if(n){""!==a&&(a="none"),n.checked=""===a;for(var l=0;l<o.length;++l)o[l].style.display=a;n.addEventListener("click",function(){console.log(a),a=""===a?"none":"",localStorage.setItem(e,a);for(var t=0;t<o.length;++t)o[t].style.display=a})}}function valid_lati_long(e,t,n){var o=e.value.toUpperCase();o=o.replace(/(^\s*)|(\s*$)/g,""),o=o.replace(/ /g,":"),o=o.replace(/\+/g,""),o=o.replace(/-/g,n),o=o.replace(/,/g,"."),o=o.replace(/\u00b0/g,":"),o=o.replace(/\u0027/g,":"),o=o.replace(/^([0-9]+):([0-9]+):([0-9.]+)(.*)/g,function(e,t,n,o,a){var l=parseFloat(t);return l+=n/60,l+=o/3600,l=Math.round(1e4*l)/1e4,a+l}),o=o.replace(/^([0-9]+):([0-9]+)(.*)/g,function(e,t,n,o){var a=parseFloat(t);return a+=n/60,a=Math.round(1e4*a)/1e4,o+a}),o=o.replace(/(.*)([N|S|E|W]+)$/g,"$2$1"),o&&o.charAt(0)!==n&&o.charAt(0)!==t&&(o=t+o),e.value=o}function activate_colorbox(e){$.extend($.colorbox.settings,{fixed:!0,current:"",previous:"",next:"",slideshowStart:"",slideshowStop:"",close:""}),e&&$.extend($.colorbox.settings,e),$("body").on("click","a.gallery",function(){$("a[type^=image].gallery").colorbox({photo:!0,maxWidth:"95%",maxHeight:"95%",rel:"gallery",slideshow:!0,slideshowAuto:!1,onComplete:function(){$(".cboxPhoto").unbind("click"),wheelzoom(document.querySelectorAll(".cboxPhoto"))}})})}function autocomplete(e){$(e).each(function(){$(this).typeahead(null,{display:"value",source:new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("value"),queryTokenizer:Bloodhound.tokenizers.whitespace,remote:{url:this.dataset.autocompleteUrl,wildcard:"QUERY"}})})})}function insertTextAtCursor(e,t){var n=e.scrollTop,o=e.selectionStart,a=e.value.substring(0,o),l=e.value.substring(e.selectionEnd,e.value.length);e.value=a+t+l,e.selectionStart=o+t.length,e.selectionEnd=e.selectionStart,e.focus(),e.scrollTop=n}var textDirection=$("html").attr("dir"),pastefield,menutimeouts=[],monthLabels=[];monthLabels[1]="January",monthLabels[2]="February",monthLabels[3]="March",monthLabels[4]="April",monthLabels[5]="May",monthLabels[6]="June",monthLabels[7]="July",monthLabels[8]="August",monthLabels[9]="September",monthLabels[10]="October",monthLabels[11]="November",monthLabels[12]="December";var monthShort=[];monthShort[1]="JAN",monthShort[2]="FEB",monthShort[3]="MAR",monthShort[4]="APR",monthShort[5]="MAY",monthShort[6]="JUN",monthShort[7]="JUL",monthShort[8]="AUG",monthShort[9]="SEP",monthShort[10]="OCT",monthShort[11]="NOV",monthShort[12]="DEC";var daysOfWeek=[];daysOfWeek[0]="S",daysOfWeek[1]="M",daysOfWeek[2]="T",daysOfWeek[3]="W",daysOfWeek[4]="T",daysOfWeek[5]="F",daysOfWeek[6]="S";var weekStart=0;$("body").on("click",".iconz",function(e){function t(){o.parent().css("z-index",100),n(),i.addClass("nameZoom"),l.hide(0,function(){a.slideDown()})}function n(){o.toggleClass(function(){return s+" "+s+"-expanded"})}e.stopPropagation();var o=$(this).closest(".person_box_template"),a=o.find(".inout"),l=o.find(".inout2"),i=o.find(".namedef"),s=o.attr("class").match(/(box-style[0-2])/)[1];a.text().length?o.hasClass(s)?t():function(){a.slideUp(function(){l.show(0),i.removeClass("nameZoom"),n(),o.parent().css("z-index","")})}():(o.css("cursor","progress"),a.load("index.php",{route:"expand-chart-box",xref:o.data("pid"),ged:WT_GEDCOM},function(){o.css("cursor",""),t()})),o.find(".iconz").toggleClass("icon-zoomin icon-zoomout")}),$(function(){$.ajaxSetup({headers:{"X-CSRF-TOKEN":$("meta[name=csrf]").attr("content")}}),$("[data-ajax-url]").each(function(){$(this).load($(this).data("ajaxUrl"))}),$('a[data-toggle="tab"][data-href]').on("show.bs.tab",function(){$(this.getAttribute("href")+":empty").load($(this).data("href"))}),autocomplete("input[data-autocomplete-url]"),$("select.select2").select2({escapeMarkup:function(e){return e}}),$("select.select2").on("select2:unselect",function(e){$(e.delegateTarget).append('<option value="" selected="selected"></option>')}),$.fn.dataTableExt.oSort["text-asc"]=function(e,t){return e.localeCompare(t,document.documentElement.lang,{sensitivity:"base"})},$.fn.dataTableExt.oSort["text-desc"]=function(e,t){return t.localeCompare(e,document.documentElement.lang,{sensitivity:"base"})},$("table.datatables").each(function(){$(this).DataTable(),$(this).show()}),$(".wt-modal-create-record").on("show.bs.modal",function(e){$("form",$(this)).data("element-id",$(e.relatedTarget).data("element-id")),$("form .form-group input:first",$(this)).focus()}),$(".wt-modal-create-record form").on("submit",function(e){e.preventDefault();var t=$(this).data("element-id");$.ajax({url:"action.php",type:"POST",data:new FormData(this),async:!1,cache:!1,contentType:!1,processData:!1,success:function(e){$("#"+t).select2().empty().append(new Option(e.text,e.id)).val(e.id).trigger("change")},failure:function(e){alert(e.error_message)}}),this.reset(),$(this).closest(".wt-modal-create-record").modal("hide")}),$(".menu-language").on("click","[data-language]",function(){return $.post("action.php",{action:"language",language:$(this).data("language")},function(){window.location.reload()}),!1}),$(".menu-theme").on("click","[data-theme]",function(){return $.post("action.php",{action:"theme",theme:$(this).data("theme")},function(){window.location.reload()}),!1});var e;$(".wt-osk-trigger").click(function(){e=document.getElementById($(this).data("id")),e.focus(),$(".wt-osk").show()}),$(document).on("focusin",":input",function(){e=this}),$(".wt-osk-script-button").change(function(){$(".wt-osk-script").prop("hidden",!0),$(".wt-osk-script-"+$(this).data("script")).prop("hidden",!1)}),$(".wt-osk-shift-button").click(function(){document.querySelector(".wt-osk-keys").classList.toggle("shifted")}),$(".wt-osk-keys").on("click",".wt-osk-key",function(){var t=$(this).contents().get(0).nodeValue,n=$(".wt-osk-shift-button").hasClass("active"),o=$("sup",this)[0];if(n&&void 0!==o&&(t=o.innerText),null!==e){var a=e.selectionStart,l=e.value,i=l.substring(0,a),s=l.substring(a,l.length);e.value=i+t+s,!1===$(".wt-osk-pin-button").hasClass("active")&&$(".wt-osk").hide()}})});