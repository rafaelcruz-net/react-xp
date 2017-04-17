import RX = require('reactxp');

const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
};

class App extends RX.Component<null, null> {
    constructor() {
        super();
    }

    render(): JSX.Element | null {
        return (
            <RX.View style={ styles.container }>
                <RX.Text style={ [styles.helloWorld] }>
                    Hello World
                </RX.Text>
            </RX.View>
        );
    }
  
}

export = App;
