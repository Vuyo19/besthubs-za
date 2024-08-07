export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat(
        'en-ZA', { // Locale for South Africa
            style: 'currency',
            currency: 'ZAR'
        }
    ).format(amount);
};
