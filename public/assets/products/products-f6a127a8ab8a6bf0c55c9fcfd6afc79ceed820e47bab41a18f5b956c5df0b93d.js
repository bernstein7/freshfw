$(document).ready(function(){$("input[name=varsku]").on("change",function(a){var t=$("#product_"+a.target.value);$(".variant").hide(),$(t).show(),$("#buy").attr("href",t.data("url"))})});