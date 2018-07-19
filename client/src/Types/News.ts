

interface INewsElm {
    image: string,
    title: string,
    content: string,
    source: string
}

type NewsElm = INewsElm;

interface INewsState {
    relevantNews: INewsElm[],
    pregnancyNews: INewsElm[],
    charityNews: INewsElm[],
    loading: {
        relevantNews: boolean,
        pregnancyNews: boolean,
        charityNews: boolean
    }
}

type NewsState = INewsState;


export { NewsElm, NewsState };