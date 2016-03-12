define(["messages"], function (Messages) {
    var PixelInspector = React.createClass({
        togglePixelInspector: function() {
            var data = {"enabled": this.refs.pixelInspector.checked};
            Messages.sendMessage(this.props.activeContext, messageType.PIXEL_INSPECTOR, data);
        },
        render: function() {
            return <div className="container">
                <div className="heading">
                    Pixel Overwrite Inspector
                </div>
                <div>
                    Detects how how many times a pixel has been drawn. The color ranges from green to red, red being drawn multiple times while green been drawn only on clear.
                </div>
                <div>
                    Enable Pixel Overwrite Inspector&nbsp;&nbsp;
                    <input ref="pixelInspector" type="checkbox" onClick={this.togglePixelInspector} />
                </div>
            </div>;
        }
    });
    return PixelInspector;
});
