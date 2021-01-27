<!-- ![ADCB Logo](https://www.healthholistic.com/wp-content/uploads/2016/10/ADCB-logo-320x100.png "ADCB Logo") -->

# ADCB "Personal" & "About", ADCP, ADCE Styles ~~and Scripts~~ UI toolkit

<p>These files need to be downloaded on you local machine.</p>

## Requirements

<ul>
 <li>Node.js, you can <a href="https://nodejs.org/en/download/">download Nodejs</a></li>
 <li>Terminal (you will use terminal to handle js packages by <a href="https://npmjs.com/">npm</a>)
  <p> you will need to intiate npm package in website folder, and you will put the repo content in it so we can start the below steps.</p>
<pre>
 <code>
  npm install
  npm init
  npm start
 </code>
</pre>
 </li>
 </ul>

### Dependencies:

<pre><code>npm install bootstrap-sass d3 flickity jquery owl.carousel</code></pre>

#### Dev.Dependencies:

<pre>
<code>
 npm install --save-dev del gulp gulp-autoprefixer gulp-clean-css gulp-rename gulp-rtlcss gulp-sass rtlcss 
</code>
</pre>

### Generating CSS files

<p>For developing and testing, you can use the Watch task in gulp as following</p>
<pre>
  <code>
   gulp watch
  </code>
  <code>
   gulp watchADCB
  </code>
  <code>
   gulp watchADCP
  </code>
  <code>
   gulp watchADCE
  </code>
</pre>
<p>For Production and exporting, you can use the Watch task in gulp as following</p>
<pre>
  <code>
   gulp build
  </code>
</pre>

After running the gulp tasks you will be generated the following css files to take them to tradion CMS

 <pre>
  <code>
    dist/adcb/assets/styles/personal/toolkit-en-custom.css
    dist/adcb/assets/styles/personal/toolkit-ar-custom.css
  </code>
</pre>
<pre>
  <code>
    dist/adcb/assets/styles/about/toolkit-en-custom.css
    dist/adcb/assets/styles/about/toolkit-ar-custom.css
  </code>
</pre>
<pre>
  <code>
    dist/adcp/assets/styles/toolkit-en.css
    dist/adcp/assets/styles/toolkit-ar.css
  </code>
</pre>
<pre>
  <code>
    dist/adce/assets/styles/toolkit-en.css
    dist/adce/assets/styles/toolkit-ar.css
  </code>
</pre>
