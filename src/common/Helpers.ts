export const formatCurrency = (value: number) => {
    const brazilianRealLocale = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return brazilianRealLocale.format(value);
}