{
    function countWordOccurrences(sentence: string, word: string): number {
        const sentenceLowerCase = sentence.toLocaleLowerCase()
        const wordLowerCase = word.toLocaleLowerCase()
        const words = sentenceLowerCase.split(" ")
        let countNumber = 0
        for (const w of words) {
            if (w === wordLowerCase)
                countNumber++
        }
        return countNumber
    }
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
}