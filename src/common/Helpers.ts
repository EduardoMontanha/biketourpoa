export const formatCurrency = (value: number) => {
    const brazilianRealLocale = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    return brazilianRealLocale.format(value);
}

export const formatDateHour = (typeOfReturn: string, data: string) => {
    const date = new Date(data);

    const rawMonth = date.getMonth() + 1;
    const rawDay = date.getDate();
    const rawHours = date.getHours();
    const rawMinutes = date.getMinutes();

    const lessThan10 = (num: number) => {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

    const year = date.getFullYear();
    const month = lessThan10(rawMonth);
    const day = lessThan10(rawDay);
    const hours = lessThan10(rawHours);
    const minutes = lessThan10(rawMinutes);

    let formattedDateHour = "";

    switch (typeOfReturn) {
        case "Date":
            formattedDateHour = `${day}/${month}/${year}`;
            break;

        case "Hour":
            formattedDateHour = `${hours}:${minutes}`;
            break;

        default: 
            console.error("Invalid type of return");
            break;
    }

    return formattedDateHour;
}