## Chaining Session Hijacking with XSS

```
1.I have added a session hijacking method in broken authentication and session management.
2.If you find that on target.
3.Try anyway to steal cookies on that target.
4.Here I am saying look for xss .
5.If you find xss you can steal the cookies of victim and using session hijacking you can takeover the account of victim.
```

## No Rate Limit On Login With Weak Password Policy

```
So if you find that target have weak password policy, try to go for no rate limit attacks in poc shows by creating very weak password of your account.

(May or may not be accepted)
```

## Password Reset Poisioning Leads To Token Theft

```
1.Go to password reset funtion.
2.Enter email and intercept the request.
3.Change host header to some other host i.e,
    Host:target.com
    Host:attacker.com
  also try to add some headers without changing host like
    X-Forwarded-Host: evil.com
    Referrer: https://evil.com
4.Forward this if you find that in next request attacker.com means you managed to successfully steal the token. :)
```

## Using Auth Bypass

```
Check out Auth Bypass method, there is a method for OTP bypass via response manipulation, this can leads to account takeovers.
1.Enter the wrong auth code / Password
2.Capture a auth request in burpsuite and send it to repeater
3.Check for the resoponse
4.Change the respone by manipulating the following parameters
  {“code”:”invalid_credentials”} -> {“code”:”valid_credentials”}
  {“verify”:”false”}             -> {“verify”:”true”}


```

## Try For CSRF On

```
1.Change Password function.
2.Email change
3.Change Security Question
```

## Token Leaks In Response

-   So there are multiple ways to do it but all are same.

-   So I will sharing my method that I have learnt here .

-   Endpoints:(Register,Forget Password)

-   Steps(For Registration):

```
  1. For registeration intercept the signup request that contains the data you have entered.
  2. Click on action -> do -> intercept the response to this request.
  3. Click forward.
  4. Check response if that contains any link, any token or OTP.
```

---

-   Steps (For password reset):

```
 1. Intercept the forget password option.
 2. Click on action -> do -> intercept the response to this request.
 3. Click forward.
 4. Check response if that contains any link,any token or OTP.
```

## Reference:

-   Various Source From Google,Twitter,Medium
-   https://avanishpathak.medium.com/an-account-takeover-vulnerability-due-to-response-manipulation-e23fe629bd1

## Author

-   [@Virdoex_hunter](https://twitter.com/Virdoex_hunter)
-   [@v3daxt](https://twitter.com/v3daxt)
