# installation

## packages
- [node-sass](https://www.npmjs.com/package/node-sass?activeTab=versions)
- [sass loader](https://www.npmjs.com/package/sass-loader) enable to import file `.scss`
- [css loader](https://www.npmjs.com/package/css-loader) enable to import file `.css`
- [style loader](https://www.npmjs.com/package/style-loader) inserts imported `.css` and `.scss` to the web page inside `<style>` tag
- optional [normalize css](https://necolas.github.io/normalize.css/)

## webpack config

```
{
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
```

## Example files structure
```
- styles
    - base
        _base.scss
        _settings.scss
    - components
        _modal.scss
        _buttons.scss
        _container.scss
        _widget.scss
    styles.scss
app.js
```

## How to import
inside `styles.scss`
```
@import './base/setings';
@import './base/base';
@import './components/modal';
@import './components/button';
@import './components/container';
@import './components/widget';
```

inside `app.js`
```
import 'normalize.css/normalize.css'; // external packages
import './styles/styles.scss';
```