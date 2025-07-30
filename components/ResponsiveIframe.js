const ResponsiveIframe = ({ src, title }) => {
  return (
    <div className="responsive-iframe-container">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResponsiveIframe;
