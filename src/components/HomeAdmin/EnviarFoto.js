import React from 'react'
import FileUploader from 'react-firebase-file-uploader'
import { storage } from '../../services/Firebase'

export default class extends React.Component {
    state = {
        isUploading: false,
        progress: 0,
        url: '',
        erro: ''
    }

    componentDidMount() {
        this.fileUploader.startUpload(this.props.arquivo)
        setInterval(() => console.log('montado'), 3000)
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 })

    handleProgress = progress => {
        this.setState({ progress })
    }

    handleUploadError = error => {
        this.setState({ isUploading: false, erro: error });
    }

    async handleUploadSuccess = filename => {
        this.setState({ progress: 100, isUploading: false });
        storage
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.fileIncrement(url))
    }

    async fileIncrement = (link) => {
        const velhoLink = this.state.linksDoAlbum
        let novoLink = []

        velhoLink.map(item => novoLink.push(item))

        novoLink.push(link)

        this.setState({ linksDoAlbum: novoLink })

    }

    customOnChangeHandler = (event) => {
        const { target: { files } } = event;
        const filesToStore = [];

        files.forEach(file => filesToStore.push(file));

        this.setState({ linksDoAlbum: filesToStore });
    }

    startUploadManually = () => {
        const { linksDoAlbum } = this.state;
        linksDoAlbum.forEach(file => {
            this.fileUploader.startUpload(file)
        })
    }

    startUploadManually = () => {
        const { files } = this.state;
        files.forEach(file => {
            this.fileUploader.startUpload(file)
        });
    }

    render() {
        return (
            <div>
                <FileUploader
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    multiple
                    storageRef={storage.ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    ref={instance => { this.fileUploader = instance }}
                    onChange={this.customOnChangeHandler}
                />
            </div>
        )
    }
}
