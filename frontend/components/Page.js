import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const themeOuiCar = {
	red         : '#FF0000',
	greenOuiCar : '#008a83',
	black       : '#393939',
	grey        : '#3A3A3A',
	lightgrey   : '#E1E1E1',
	offWhite    : '#EDEDED',
	maxWidth    : '1000px',
	bs          : '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StyledPage = styled.div`
	background: white;
	color: ${(props) => props.theme.black};
`;

const PageContainer = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
`;

injectGlobal`
    @font-face {
        font-family: 'Lato', sans-serif;
        src: url('https://fonts.googleapis.com/css?family=Lato&display=swap');
        format: ('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html{
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after{
        box-sizing: inherit;
    }
    body{
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height:2;
        font-family: 'Lato', sans-serif;
    }
    a {
        text-decoration: none;
        color: ${themeOuiCar.black};
    }
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={themeOuiCar}>
				<StyledPage>
					<Meta />
					<Header />
					<PageContainer>{this.props.children}</PageContainer>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
