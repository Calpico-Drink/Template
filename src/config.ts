type Config = {
    GA_ID: string
}

type Meta = {
    Title: string,
    Description: string,
    URL: string,
    Image: string,
    PWA: boolean
}

let MetaData: Meta = {
    Title: 'Template',
    Description: 'Just a template.',
    URL: 'https://template-liard.vercel.app/',
    Image: '/Logo.png',
    PWA: true
}

let ConfigData: Config = {
    GA_ID: 'U-XXXXXX'
}

export { ConfigData, MetaData }