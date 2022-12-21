import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'default',
    brandTitle: 'CJ 바이오사이언스',
    brandUrl: 'https://www.cjbioscience.com/',
    brandImage: 'https://pibio-resources.s3.ap-northeast-2.amazonaws.com/design-system/image/logo_wh_en.png',
  }),
});
