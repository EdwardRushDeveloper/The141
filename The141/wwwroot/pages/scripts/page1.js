

Page = {}
Page.Class = function()
{
    var _this = this;

     $s = function(id)
     {
        return document.getElementById(id);
     }

    _this.SearchButton = $s('PageSearchButton');
    _this.SearchText   = $s('PageSearchText');

    _this.SearchButton.Search = _this.SearchText;

    _this.SearchButton.onclick = function()
    {
        var searchThis = "https://www.google.com/search?q=" + this.Search.value;

        window.open(searchThis);

    }
}


