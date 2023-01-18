interface Theme {
    fontSizes: number[]
    space: number[]
    fontWeights: number[]
    colors: {
        main: string
        additional: string
    }
}

export const theme: Theme = {
    fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
    space: [0, 4, 8, 16, 32, 56, 63, 64, 128, 256],
    fontWeights: [400, 600, 700],
    colors: {
        main: '#363636',
        additional: '#575757',
    },
}
