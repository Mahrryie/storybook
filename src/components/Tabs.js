import React from 'react';
// import Image from 'common/components/Image';
import {TabBar} from '@rmwc/tabs';
import {Tab} from '@rmwc/tabs';
import '@rmwc/tabs/styles';
import ListOfLinkBlocks from './ListOfTitleLinkBlocks';
import TitleThird from './TitleThird';
import List from './List';
import TitleLink from './TitleLink';
import PropTypes from 'prop-types';

const TabsArea = ({
    tabsItems,
    tabsClass = '',
    imageName,
    imageClass = '',
    imagePosition = '50% 50%',
    listImageName,
    listImageClass = '',
    listImagePosition = '50% 50%',
    contentTextList,
    listOfLinkItems,
    listOfLinkTextItems,
    gridListClass = '',
    contentOptional = false,
    hasGridListItems = false,
    customItems,
    colorScheme = 'primary'}) => {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <div className={`${colorScheme}-scheme`}>
        <div className={`tabs ${tabsClass}`}>
            <div className='tabs-wrapper'>
                <TabBar
                    className='tabs-items'
                    activeTabIndex={activeTab}
                    onActivate={evt => setActiveTab(evt.detail.index)}
                >
                    {tabsItems.map(({title}, index) => {
                        return (
                            <Tab
                                onClick={() => setActiveIndex(index)}
                                className={index === activeIndex ? 'tabs-item active' : 'tabs-item'}
                                key={title}
                            >
                                {title}
                            </Tab>
                        );
                    })}
                </TabBar>
            </div>
            <div className='tabs-panels'>
                {listOfLinkItems && listOfLinkTextItems &&
                    <div className='list-block-links-tabs'>
                        {tabsItems.map(({title}, index) => {
                            return (
                                <h3 key={index}>
                                    {index === activeIndex && title}
                                </h3>
                            );
                        })}
                        <ListOfLinkBlocks items={listOfLinkTextItems[activeIndex].listItems} link={listOfLinkItems[activeIndex].listItems}/>
                    </div>
                }
                {contentOptional &&
                    <div className='tabs-title-copy-row'>
                        {tabsItems[activeIndex].link ?
                            <>
                                <TitleLink title={tabsItems[activeIndex].title} link={tabsItems[activeIndex].link}/>
                                <p className='paragraph'>{tabsItems[activeIndex].text}</p>
                            </>
                            : <>
                                <TitleThird title={tabsItems[activeIndex].title}/>
                                <p className='paragraph'>{tabsItems[activeIndex].text}</p>
                            </>
                        }
                    </div>
                }
                {hasGridListItems &&
                    <div className='tabs-panels-content-wrapper'>
                        <ul className={`list ${gridListClass}`}>
                            {tabsItems[activeIndex].listItems.map(listItem => (
                                <li key={listItem} className='list-item'>{listItem}</li>
                            ))}
                        </ul>
                        {listImageName && hasGridListItems &&
                            <div className='tabs-image'>
                                {/* <Image image={listImageName} alt={tabsItems[0].title} className={listImageClass} objectPosition={listImagePosition}/> */}
                            </div>
                        }
                    </div>
                }
                {contentTextList &&
                    <div>
                        <TitleThird title={contentTextList[activeIndex].title}/>
                        <p className='paragraph'>{contentTextList[activeIndex].text}</p>
                        {contentTextList[activeIndex].listItems && <List items={contentTextList[activeIndex].listItems || []} listClass='columns-two list-top-padding'/>}
                    </div>
                }
                {customItems &&
                    <>
                        {customItems[activeIndex].content}
                    </>
                }
                {imageName &&
                    <div className='tabs-image'>
                        {/* <Image image={imageName} alt={tabsItems[0].title} className={imageClass} objectPosition={imagePosition}/> */}
                    </div>
                }
            </div>
        </div>
        </div>
    );
};

export default TabsArea;

TabsArea.propTypes = {
    tabsClass: PropTypes.string,
    tabsItems: PropTypes.array,
    contentTextList: PropTypes.array,
    listOfLinkItems: PropTypes.array,
    listOfLinkTextItems: PropTypes.array,
    gridListClass: PropTypes.string,
    contentOptional: PropTypes.bool,
    hasGridListItems: PropTypes.bool,
    customItems: PropTypes.array,
    colorScheme: PropTypes.string,
}

TabsArea.defaultProps = {
    tabsItems: [],
    tabsClass: '',
    contentTextList: [],
    listOfLinkItems: [],
    listOfLinkTextItems: [],
    gridListClass: '',
    contentOptional: false,
    hasGridListItems: false,
    customItems: [],
    colorScheme: 'primary'
}