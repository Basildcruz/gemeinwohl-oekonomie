/*jshint multistr: true */

Template.gwoeMatrixTemplate =
    '<div id="gwoe-matrix" class="bubble display-none">\
        \
        <div class="bootstrap-table whitebg">\
        \
            <div class="row row-border dheader-style js-equal-height">\
                <div class="row-cell col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <span class="gwoe-green">{valueName}</span> / <span class="gwoe-blue">{stakeholdersName}</span>\
                </div>\
                <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[0]}</div>\
                <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[1]}</div>\
                <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[2]}</div>\
                <div class="row-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[3]}</div>\
                <div class="row-cell last-cell gwoe-green col-lg-2 col-md-2 col-sm-2 col-xs-2">{values[4]}</div>\
            </div>\
            \
            <div class="row row-border js-equal-height">\
                <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {stakeholders[0].shortcode}) {stakeholders[0].name}\
                </div>\
                <div class="row-cell indicator-cell last-cell ind-trigger col-lg-10 col-md-10 col-sm-10 col-xs-10" \
                                                        data-modal="matrix-{stakeholders[0].values[0].shortcodeSlug}">\
                    <div class="indicator-title">\
                        {stakeholders[0].values[0].shortcode}) {stakeholders[0].values[0].title}\
                    </div>\
                    <div class="indicator-description">\
                        {stakeholders[0].values[0].content}\
                    </div>\
                    <div class="indicator-points">\
                        {stakeholders[0].values[0].points}\
                    </div>\
                </div>\
            </div>\
            \
            <div class="row row-border js-equal-height">\
                <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {stakeholders[1].shortcode}) {stakeholders[1].name}\
                </div>\
                <div class="row-cell indicator-cell last-cell ind-trigger col-lg-10 col-md-10 col-sm-10 col-xs-10" \
                                                        data-modal="matrix-{stakeholders[1].values[0].shortcodeSlug}">\
                    <div class="indicator-title">\
                        {stakeholders[1].values[0].shortcode}) {stakeholders[1].values[0].title}\
                    </div>\
                    <div class="indicator-description">\
                        {stakeholders[1].values[0].content}\
                    </div>\
                    <div class="indicator-points">\
                        {stakeholders[1].values[0].points}\
                    </div>\
                </div>\
            </div>\
            \
            <div class="row row-border js-equal-height">\
                <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {stakeholders[2].shortcode}) {stakeholders[2].name}\
                </div>\
                \
                {#stakeholders[2].values}\
                <div class="row-cell indicator-cell {@if cond="{$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2" \
                                                                    data-modal="matrix-{shortcodeSlug}">\
                    <div class="indicator-title">\
                        {shortcode}) {title|s}\
                    </div>\
                    <div class="indicator-description">\
                        {content}\
                    </div>\
                    <div class="indicator-points">\
                        {points}\
                    </div>\
                </div>\
                {/stakeholders[2].values}\
            </div>\
            \
            <div class="row row-border js-equal-height">\
                <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {stakeholders[3].shortcode}) {stakeholders[3].name}\
                </div>\
                {#stakeholders[3].values}\
                <div class="row-cell indicator-cell {@if cond="{$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2" \
                                                                    data-modal="matrix-{shortcodeSlug}">\
                    <div class ="indicator-title">\
                        {shortcode}) {title|s}\
                    </div>\
                    <div class="indicator-description">\
                        {content}\
                    </div>\
                    <div class="indicator-points">\
                        {points}\
                    </div>\
                </div>\
                {/stakeholders[3].values}\
            </div>\
            \
            <div class="row row-border js-equal-height">\
                <div class="row-cell dheader-style gwoe-blue-b col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {stakeholders[4].shortcode}) {stakeholders[4].name}\
                </div>\
                {#stakeholders[4].values}\
                <div class="row-cell indicator-cell {@if cond="{$idx} == 4"}last-cell {/if}ind-trigger col-lg-2 col-md-2 col-sm-2 col-xs-2" \
                                                                    data-modal="matrix-{shortcodeSlug}">\
                    <div class ="indicator-title">\
                        {shortcode}) {title|s}\
                    </div>\
                    <div class="indicator-description">\
                        {content}\
                    </div>\
                    <div class="indicator-points">\
                        {points}\
                    </div>\
                </div>\
                {/stakeholders[4].values}\
            </div>\
            \
            <div class="row row-border js-equal-height">\
                <div class="row-cell dheader-style negative-color-b col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {negativeCriteriaName}\
                </div>\
                {#negativeCriteria}\
                <div class="row-cell indicator-cell {@if cond="{$idx} == 4"}last-cell {/if}col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    {#values}\
                        <div class="negative-container ind-trigger" data-modal="matrix-{shortcodeSlug}">\
                            <div class="negative-points">\
                                {points}\
                            </div>\
                            <div class="negative-content">\
                                {titleShort|s}\
                            </div>\
                        </div>\
                    {/values}\
                </div>\
                {/negativeCriteria}\
            </div>\
            \
        </div>\
        <!-- end of matrix table -->\
        \
    </div>\
    <!-- end of bubble -->\
        ';
