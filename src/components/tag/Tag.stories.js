import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tag from './Tag';

import '../../styles/icon.css';
import '../../styles/tag.css';
import '../../styles/common/transition.css';

export const actions = {
  onClose: action('Closed'),
  onClick: action('Clicked')
};

const mr10 = {
  marginRight: '10px'
};

storiesOf('Tag', module)
  .add('default', () => < Tag > Tag
Default < /Tag>)
  .add('on click', () => {
    return (
           < Tag
    style = {
    {
      cursor: 'pointer'
    }
  }
    onClick = { actions.onClick } > Tag
    Clickable < /Tag>
  )
  })
  .add('types', () => {
    return (
           < div >
           < Tag
    style = { mr10 } > Primary < /Tag>
                     < Tag
    style = { mr10 }
    type = 'success' > Success < /Tag>
           < Tag
    style = { mr10 }
    type = 'info' > Info < /Tag>
           < Tag
    style = { mr10 }
    type = 'warning' > Warning < /Tag>
           < Tag
    style = { mr10 }
    type = 'danger' > Danger < /Tag>
           < /div>
  )
  })
  .add('closable', () => {
    return (
           < div >
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
  >
    Primary < /Tag>
    < Tag
    style = { mr10 }
    closable
    type = 'success'
    {...
      actions
    }
  >
    Success < /Tag>
    < Tag
    style = { mr10 }
    closable
    type = 'info'
    {...
      actions
    }
  >
    Info < /Tag>
    < Tag
    style = { mr10 }
    closable
    type = 'warning'
    {...
      actions
    }
  >
    Warning < /Tag>
    < Tag
    style = { mr10 }
    closable
    type = 'danger'
    {...
      actions
    }
  >
    Danger < /Tag>
    < /div>
  )
  })
  .add('hit', () => {
    return (
           < div >
           < Tag
    style = { mr10 }
    hit > Primary < /Tag>
    < Tag
    style = { mr10 }
    hit
    type = 'success' > Success < /Tag>
           < Tag
    style = { mr10 }
    hit
    type = 'info' > Info < /Tag>
           < Tag
    style = { mr10 }
    hit
    type = 'warning' > Warning < /Tag>
           < Tag
    style = { mr10 }
    hit
    type = 'danger' > Danger < /Tag>
           < /div>
  )
  })
  .add('rounded', () => {
    return (
           < div >
           < Tag
    style = { mr10 }
    rounded > Rounded < /Tag>
    < Tag
    style = { mr10 }
    rounded
    hit > Rounded
    Hit < /Tag>
    < Tag
    style = { mr10 }
    rounded
    type = 'success' > Rounded
    Success < /Tag>
    < Tag
    style = { mr10 }
    rounded
    hit
    type = 'success' > Rounded
    Success
    Hit < /Tag>
    < Tag
    style = { mr10 }
    rounded
    closable
    {...
      actions
    }
  >
    Rounded
    Closable < /Tag>
    < /div>
  )
  })
  .add('size', () => {
    return (
           < div >
           < Tag
    style = { mr10 } > Default < /Tag>
                     < Tag
    style = { mr10 }
    size = 'medium' > Medium < /Tag>
           < Tag
    style = { mr10 }
    size = 'small' > Small < /Tag>
           < Tag
    style = { mr10 }
    size = 'mini' > Mini < /Tag>
           < br / >
           < br / >
           < Tag
    style = { mr10 }
    rounded > Default < /Tag>
    < Tag
    style = { mr10 }
    rounded
    size = 'medium' > Medium < /Tag>
           < Tag
    style = { mr10 }
    rounded
    size = 'small' > Small < /Tag>
           < Tag
    style = { mr10 }
    rounded
    size = 'mini' > Mini < /Tag>
           < br / >
           < br / >
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
  >
    Default < /Tag>
    < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    size = 'medium' > Medium < /Tag>
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    size = 'small' > Small < /Tag>
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    size = 'mini' > Mini < /Tag>
           < br / >
           < br / >
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    rounded > Default < /Tag>
    < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    rounded
    size = 'medium' > Medium < /Tag>
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    rounded
    size = 'small' > Small < /Tag>
           < Tag
    style = { mr10 }
    closable
    {...
      actions
    }
    rounded
    size = 'mini' > Mini < /Tag>
           < /div>
  )
  });