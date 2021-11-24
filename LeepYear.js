let year = 2008;
if (year < 1000 || year > 9999)
{
    console.log("Enter year in-valid range 1000 to 9999");
    return false;
}
else
{
    if (year % 4 == 0)
    {
        if (year % 100 == 0)
        {
            if (year % 400 == 0)
            {
                console.log("Leap year");
            }
            else
            {
                console.log("Not Leap year");
            }
        }
        else
        {
            console.log("Leap year");
        }
    }
    else
    {
        console.log("Not Leap year");
    }
}
