export class AmountService
{
  public calculateSavings(percent, amount){
    return (percent/100)*amount;
  }

  public matchAmounts(orginialAmount, currentAmount){
    return orginialAmount === currentAmount;
  }

}