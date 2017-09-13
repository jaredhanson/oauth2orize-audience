/**
 * Parse request parameters indicating audience information.
 *
 * This module is a wildcard parser that parses authorization requests for
 * extensions parameters indicating audience information.  The audience
 * identifies the resource server at which the client is requesting access.
 *
 * Examples:
 *
 *     server.grant(audience.extensions());
 *
 * @return {Object} module
 * @api public
 */
module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    // An audience indicator is not formally specified as part of OAuth 2.0.
    // However, it has been found to be generally applicable, and various draft
    // specifications have defined its usage over the course of time.
    //
    // - [OAuth 2.0: Audience Information](https://tools.ietf.org/html/draft-tschofenig-oauth-audience-00)
    //     Defines usage of an `audience` parameter for the token endpoint.  The
    //     parameter's value is a single URI.
    //
    // - [Authorization Cross Domain Code 1.0](https://openid.bitbucket.io/draft-acdc-01.html)
    //     Defines usage of an `aud` parameter, for both the authorization and
    //     token endpoints.  The parameter's value is a single URI.
    //
    // - [OAuth 2.0 Token Exchange](https://tools.ietf.org/html/draft-ietf-oauth-token-exchange-09)
    //     Defines usage of an `audience` parameter for the token endpoint.  The
    //     parameter's value is a logical name, and may be a URI, but is not
    //     limited to URIs and may be an identifier in another format.  Multiple
    //     `audience` parameters are allowed.
    //
    //     The specification also defines a related `resource` parameter, for
    //     which the value is a physical location and must be a URI.
    
    if (q.audience || q.aud) {
      ext.audience = q.audience || q.aud;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}
