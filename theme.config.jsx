export default {
  logo: (
    <>
      <strong style={{ marginLeft: '.4em' }}>tiny docs</strong>
    </>
  ),
  project: {
    link: 'https://github.com/tinygrad/tinygrad/',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – tinygrad',
    };
  },
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta property="og:title" content="tinygrad" />
      <meta
        property="og:description"
        content="Documentation for tinygrad, a very simple ML framework."
      />
    </>
  ),
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a
          href="https://github.com/tinygrad/tinygrad/blob/master/LICENSE"
          target="_blank"
        >
          George Hotz
        </a>
        .
      </span>
    ),
  },
};
