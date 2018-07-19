import * as React from 'react';

import { connect } from 'react-redux';
import { addNews, getAllNews } from '../../../../../StateManager/actions/newsActions';

import { NewsState } from '../../../../../Types/News';

import GenTable from './GenTable';

interface ITest {
    image: File;
}

interface IProps {
    addNews: (news: any) => (dispatch: any) =>  void;
    getAllNews: () => (dispatch: any) =>  void;
}

interface IStateProps {
    news: NewsState
}

type State = ITest & any;
type Props = IStateProps & IProps & any;

class NewsTable extends React.Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            title: "",
            content: "",
            source: "",
            image: null,
            img: "",
            category: "",
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    public componentDidMount() {
        this.props.getAllNews()
    }

    public render() {
        const columns = [
            {
                Header: "Title",
                accessor: "title"
            },{
                Header: "Content",
                accessor: "content"
            },{
                Header: "Source",
                accessor: "source"
            },{
                Header: "Image",
                accessor: "image"
            },{
                Header: "Category",
                accessor: "category"
            }
        ];

        const inputs = [
            {
                type: "TEXT",
                props: {
                    type:"text",
                    name:"title",
                    placeholder:"Title",
                    value:this.state.title,
                    onChange:this.onInputChange
                }
            },{
                type: "AREA",
                props: {
                    type:"text" ,
                    name:"content",
                    placeholder:"Content",
                    value:this.state.content,
                    onChange:this.onInputChange
                }
            },{
                type: "TEXT",
                props: {
                    type:"text",
                    name:"source",
                    placeholder:"Source",
                    value:this.state.source,
                    onChange:this.onInputChange
                }
            },{
                type: "TEXT",
                props: {
                    type:"file",
                    name:"image",
                    placeholder:"Image",
                    value:this.state.img,
                    onChange:this.onInputChange
                }
            },{
                type: "SELECT",
                props: {
                    type:"text",
                    name:"category",
                    options:[
                        ["","Category"],
                        ["relevant", "Relevant News"],
                        ["pregnancy", "Pregnancy News"],
                        ["charity", "Charity News"],
                    ],
                    value:this.state.category,
                    onChange:this.onSelectChange
                }
            },
        ]

        const { news } = this.props
        const data = [].concat(news.relevantNews, news.pregnancyNews, news.charityNews);

        return(
            <div>
                <GenTable
                    columns={columns}
                    data={data}
                    inputs={inputs}
                    id="AddNews"
                    title="Add News"
                    onClick={this.onAddNews}
                    onClose={this.onClose}
                />
            </div>
        );
    }

    private onClose = () => {
        const prev = {
            title: "",
            content: "",
            source: "",
            image: "",
            img: "",
            category: "",
        }
        this.setState(prev);
    }

    private onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;
        const prev = {...this.state};

        if (name === "image" && e.currentTarget.files != null) {
            const fp:File = e.currentTarget.files[0];
            const value = e.currentTarget.value;
            prev[name] = fp;
            prev.img = value;
        } else {
            const value = e.currentTarget.value;
            prev[name] = value;
        }
        this.setState(prev);
    }

    private onSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        const prev = {...this.state};
        prev[name] = value;
        this.setState(prev);
    }

    private onAddNews = () => {
        const newNews = new FormData();

        const name = this.state.img.split("\\")

        newNews.append("title", this.state.title)
        newNews.append("content", this.state.content)
        newNews.append("source", this.state.source)
        newNews.append("image", this.state.image)
        newNews.append("image_name", name[name.length-1])
        newNews.append("category", this.state.category)

        this.props.addNews(newNews);
        this.onClose();
    }
}

const mapStateToProps = (state: any): IStateProps => {
    return {
        news: state.news,
    };
}


export default connect( mapStateToProps, { addNews, getAllNews })(NewsTable);