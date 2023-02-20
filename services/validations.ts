export const phoneNumber = /\([1-9]{2}\)9[1-9]\d{3}-\d{4}/;

export const cpfNumber = (value: string) => {
    if(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    } else {
        return '';
    }
}