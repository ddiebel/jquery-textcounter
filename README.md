jquery-textcounter
==================

Counts typed characters in a textarea and shows how many characters are left until the maximum allowed characters are reached.

###How to use:
````html
<script>
        jQuery(document).ready(function($) {
            $('#comment').countChars({counterElement : "#textareacount b"});
        });
    </script>
</head>
<body>

        <form name="test">
            <textarea maxlength="255" placeholder="" id="comment"></textarea>
            <span id="textareacount">left: <b>255</b></span>
        </form>

<script type="text/javascript" src="jquery.textcounter.min.js"></script>

</body>
````
