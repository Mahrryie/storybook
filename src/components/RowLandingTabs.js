import React, {useState} from 'react';
import {TabBar, TabBarOnActivateEventT} from '@rmwc/tabs';
import {Tab} from '@rmwc/tabs';
import '@rmwc/tabs/styles';
import TitleLink from './TitleLink';
import '../styles/index.scss';

const RowLandingTabs = ({tabsItem, tabsClass, colorScheme}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(tabsItem[0]);

    const onActivateFc = (evt) => {
        setActiveIndex(evt.detail.index);
        setActiveTab(tabsItem[evt.detail.index]);
    };

    return (
        <div className={`tabs-row ${tabsClass} ${colorScheme}-scheme`}>
            <div className='tabs-row-wrapper'>
                <TabBar
                    className='tabs-row-items'
                    activeTabIndex={activeIndex}
                    onActivate={evt => onActivateFc(evt)}
                >
                    {tabsItem.map(({title, tabNav}, index) => {
                        return (
                            <Tab
                                onClick={() => setActiveIndex(index)}
                                focusOnActivate={false}
                                className={index === activeIndex ? 'tabs-row-item active' : 'tabs-row-item'}
                                key={title}
                            >
                                {tabNav ? tabNav : title}
                            </Tab>
                        );
                    })}
                </TabBar>
            </div>
            <div className={`tabs-row-panels ${tabsClass}-panels`}>
                <div className={activeTab.optionalContent ? `${tabsClass}-left` : 'tabs-row-content'}>
                    {activeTab.link ?
                        <TitleLink title={activeTab.title} link={activeTab.link}/> :
                        <h3 className='third-level-title'>
                            {activeTab.title}
                        </h3>
                    }
                    <p className='paragraph'>
                        {activeTab.text}
                    </p>
                    {activeTab.listItems &&
                        activeTab.listItems.map((item, index) => (
                            <li className='tabs-row-list-item' key={index}>
                                {item}
                            </li>
                        ))
                    }
                    {activeTab.leftOptionalContent && <div className='tabs-row-left-opt-content'>
                        {activeTab.leftOptionalContent}
                    </div>}
                </div>
                {activeTab.optionalContent &&
                    <div className={`${tabsClass}-right`}>
                        {activeTab.optionalContent}
                    </div>
                }
            </div>
        </div>
    );
};

export default RowLandingTabs;
