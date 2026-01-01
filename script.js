function run()
{
    let HTML = document.getElementById("html_code").value;
    let CSS = document.getElementById("css_code").value;
    let JS = document.getElementById("js_code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = HTML+"<style>"+CSS+"</style>";
    output.contentWindow.eval(JS);
}