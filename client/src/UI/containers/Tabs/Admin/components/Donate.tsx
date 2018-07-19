import * as React from 'react';

import { connect } from 'react-redux';

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

class Donate extends React.Component<Props, State> {

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
                Header: "Image",
                accessor: "image"
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
                    type:"file",
                    name:"image",
                    placeholder:"Image",
                    value:this.state.img,
                    onChange:this.onInputChange
                }
            },
        ]
        const data: any[] = [];

        return(
            <div>
                <GenTable
                    columns={columns}
                    data={data}
                    inputs={inputs}
                    id="AddProduct"
                    title="Add Product"
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
            image: "",
            img: "",
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

    private onAddNews = () => {
        // tslint:disable-next-line:no-console
        console.log(this.state)

        const newNews = new FormData();
        newNews.append("title", this.state.title)
        newNews.append("content", this.state.content)
        newNews.append("source", this.state.source)
        newNews.append("image", this.state.image)
        newNews.append("category", this.state.category)

        // const newNews = {
        //     title: this.state.title,
        //     content: this.state.content,
        //     source: this.state.source,
        //     image: this.state.image,
        //     category: this.state.category,
        // }
        

        this.props.addNews(newNews);

        this.onClose();
    }
}

// const mapStateToProps = (state: any): IStateProps => {
//     return {
//         news: state.news,
//     };
// }


export default connect( null, null)(Donate);