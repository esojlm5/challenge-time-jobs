import React from 'react';
import PropTypes from 'prop-types';
import { wrapper } from '@/redux/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import { ContainerCustom, HeaderJobs } from '@/components';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'swiper/swiper-bundle.css';
import theme from '@/lib/theme';

function MyApp(props) {
  const { Component, pageProps } = props;
  const store = useStore(state => state);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>TimeJobs</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <HeaderJobs />
        <PersistGate persistor={store.__persistor} loading={<div>loading</div>}>
          <ContainerCustom>
            <Component {...pageProps} />
          </ContainerCustom>
        </PersistGate>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

export default wrapper.withRedux(MyApp);
