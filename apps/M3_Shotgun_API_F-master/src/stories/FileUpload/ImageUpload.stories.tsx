import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputUpload } from '@components/fileUpload/InputUpload';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ImageFileUpload',
  component: InputUpload,
} as ComponentMeta<typeof InputUpload>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof InputUpload> = (args) => <InputUpload {...args} />;

export const ImageUpload = Template.bind({});

ImageUpload.args = {
  /*👇 The args you need here will depend on your component */
  accept: '.nwk, .fastaq, .pdf, .css, .png',
  submitButtonContent: '업로드',
  inputWithFilesContent: '파일 추가',
  inputContent: '',

};
