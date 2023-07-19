export const convertPLNToUSD = (PLN) => {

  
  if (PLN === undefined || PLN === null || Array.isArray(PLN) || typeof PLN === 'object'){
    return 'Error';
  }
  

  if (PLN < 0) {
    return '$0.00';
  }

  if (typeof PLN !== 'number') {
    return NaN;
  }


  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}