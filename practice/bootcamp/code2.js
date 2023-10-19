function PrintInitials(initials) {
    const initialPatterns = {
        'A': [
            '   *   ',
            '  * *  ',
            ' *   * ',
            '*******',
            '*       *',
        ],
        'B': [
            '****** ',
            '*     *',
            '****** ',
            '*     *',
            '****** ',
        ],
    };
    initials = initials.toUpperCase();
    const rows = Array(5).fill('');
    for (let i = 0; i < initials.length; i++) {
        const initial = initials[i];
        const pattern = initialPatterns[initial];
        for (let j = 0; j < 5; j++) {
            rows[j] += pattern[j] + '  '; 
        }
    }
    rows.forEach(row => {
        console.log(row);
    });
}
const userInitials = ("AB");
PrintInitials(userInitials);
