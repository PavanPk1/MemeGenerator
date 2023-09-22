import {Component} from 'react'

import {
  MainContainer,
  InnerContainer,
  Heading,
  FormContainer,
  MemeContainer,
  Label,
  InputEl,
  Select,
  Option,
  GenerateButton,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    displayMeme: false,
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
  }

  onClickGenerateBtn = () => {
    this.setState({
      displayMeme: true,
    })
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: parseInt(event.target.value)})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <Label htmlFor="backgroundImageUrl">Image URL</Label>
        <InputEl
          type="text"
          id="backgroundImageUrl"
          placeholder="Enter the Image URL"
          value={imageUrlInput}
          onChange={this.onChangeImageUrl}
        />
        <Label htmlFor="topText">Top Text</Label>
        <InputEl
          type="text"
          id="topText"
          placeholder="Enter the Top Text"
          value={topTextInput}
          onChange={this.onChangeTopText}
        />
        <Label htmlFor="bottomText">Bottom Text</Label>
        <InputEl
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
        />
        <Label htmlFor="select">Font Size</Label>
        <Select
          id="select"
          value={fontSizeInput}
          onChange={this.onChangeFontSize}
        >
          {fontSizesOptionsList.map(item => (
            <Option key={item.optionId} value={item.optionId}>
              {item.displayText}
            </Option>
          ))}
        </Select>
        <GenerateButton type="submit" onClick={this.onClickGenerateBtn}>
          Generate
        </GenerateButton>
      </FormContainer>
    )
  }

  renderMemeContainer = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeContainer bgImage={imageUrl} data-testid="meme">
        <TextContent activeFontSize={fontSize}>{topText}</TextContent>

        <TextContent activeFontSize={fontSize}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    const {displayMeme} = this.state

    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <InnerContainer>
          {this.renderFormContainer()}
          {displayMeme && this.renderMemeContainer()}
        </InnerContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
