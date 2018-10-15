# oauth2orize-audience

[OAuth2orize](https://github.com/jaredhanson/oauth2orize) extension providing
support for audience indicators.

## Install

    $ npm install oauth2orize-audience

## Usage

#### Parse Request Extensions

In order to parse the additional parameters used to indicate an audience,
register support for this extension with a `Server` instance:

```js
server.grant(require('oauth2orize-audience').extensions());
```

## Sponsorship

OAuth2orize is open source software.  Ongoing development is made possible by
generous contributions from [individuals and corporations](https://github.com/jaredhanson/oauth2orize/blob/master/SPONSORS.md).
To learn more about how you can help keep this project financially sustainable,
please visit Jared Hanson's page on [Patreon](https://www.patreon.com/jaredhanson).

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2016-2017 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>


