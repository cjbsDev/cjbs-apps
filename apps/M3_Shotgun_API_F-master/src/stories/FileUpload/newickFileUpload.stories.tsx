import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {NwkFileUpload} from '@components/fileUpload/NewickFileUpload';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'NewickFileUpload',
  component: NwkFileUpload,
} as ComponentMeta<typeof NwkFileUpload>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof NwkFileUpload> = (args) => <NwkFileUpload {...args} />;

export const NewickUpload = Template.bind({});

NewickUpload.args = {
  /*👇 The args you need here will depend on your component */
  accept: '.nwk, .fastaq, .pdf, .css, .png',
  submitButtonContent: '업로드',
  inputWithFilesContent: '파일 추가',
  inputContent: '',

};
