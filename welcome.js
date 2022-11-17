function writeSubForm(){
    var index=document.getElementById("expensesWrapper").childElementCount-2;
    var html="<div id=\"expense"+index+"\" class=\"subForm flex-row\"><h3>#"+index+"</h3><div id\"formFields"+index+"\" class=\"formFields box-border\"><label for=\"price\">Price: </label><input type=\"text\" id=\"price"+index+"\" class=\"field\" required/><br><br><label for=\"reason\">Reason: </label><input type=\"text\" id=\"reason"+index+"\" class=\"field\" required/></div><div id=\"removeIcon\" class=\"addIcon\" onclick=\"removeSubForm(event)\">-</div></div>";
    document.getElementById("addExpenseSubFormBtn").insertAdjacentHTML('beforebegin',html);
} 

function writeRevenueSubForm(){
    var index=document.getElementById("revenuesWrapper").childElementCount-2;
    var html="<div id=\"revenue"+index+"\" class=\"subForm flex-row\"><h3>#"+index+"</h3><div id\"formFields"+index+"\" class=\"formFields box-border\"><label for=\"amount\">Amount: </label><input type=\"text\" id=\"price"+index+"\" class=\"field\" required/><br><br><label for=\"reason\">Reason: </label><input type=\"text\" id=\"reason"+index+"\" class=\"field\" required/></div><div id=\"removeIcon\" class=\"addIcon\" onclick=\"removeSubForm(event)\">-</div></div>";
    document.getElementById("addRevenueSubFormBtn").insertAdjacentHTML('beforebegin',html);
} 

function removeSubForm(event){
    var element=event.currentTarget.parentNode;
    element.remove();
} 

