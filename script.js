function Click()
{
    var barcode = document.getElementsByClassName("input")[0].value;
    var output = document.getElementsByClassName("output")[0];
    var oddSum = 0;
    var evenSum = 0;
    for (var i = 1; i < 13; i++)
    {
        if (i % 2 == 0)evenSum += (barcode[i-1]*1);
        else oddSum += (barcode[i-1]*1);
    }
    var result = (evenSum * 3) + oddSum;
    if (10 - (result % 10) == barcode[12])
    {
        output.textContent = "valid barcode";
        output.id = "green";
        return;
    }
    output.textContent = "invalid barcode";
    output.id = "red";
}