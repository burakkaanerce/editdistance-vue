<template>
  <v-layout justify-center row wrap>
    <v-flex xs4>
      <v-layout justify-center column>
        <v-flex xs6 class="pb-2">
          This application is made for measuring the difference between two
          words by <b>Levenshtein Distance Algorithm</b> and spell checking of
          the word from a dictionary which contains 21837 words. You can compare
          the edit distance between two words in
          <b>Distance Finder</b>
          page according to Levenshtein Distance.
        </v-flex>
        <v-divider />
        <v-flex xs6 class="py-2">
          <b>The Levenshtein Distance</b> between two words is the minimum
          number of single-character edits (insertions, deletions or
          substitutions) required to change one word into the other.
        </v-flex>
        <v-divider />
        <v-flex xs6 class="py-2">
          <v-layout justify-center>
            <table style="border-collapse: collapse;" border="2">
              <colgroup>
                <col style="width: 60px;" />
                <col style="width: 60px;" />
                <col style="width: 60px;" />
              </colgroup>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>Letter 2</td>
                </tr>
                <tr>
                  <td></td>
                  <td>A</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td>Letter 1</td>
                  <td>C</td>
                  <td>D</td>
                </tr>
              </tbody>
            </table>
          </v-layout>
        </v-flex>
        <v-flex xs6 class="py-2">
          To find the value of cell D, the letters in the row and column will be
          compared. There are 3 possibilities in this comparison.
          <v-card
            elevation="8"
            class="pa-0 mx-0 my-2"
            color="blue-grey lighten-5"
          >
            <v-card-title class="font-weight-bold">
              1.) Letter 1 = Letter 2:
            </v-card-title>
            <v-card-text class="pt-0">
              If that's the case, D = A, because after the A is calculated,
              <b>since the distance has not changed</b>, so D will be A.
            </v-card-text>
          </v-card>
          <v-card
            elevation="8"
            class="pa-0 mx-0 my-2"
            color="blue-grey lighten-5"
          >
            <v-card-title class="font-weight-bold">
              2.) Letter 1 != Letter 2:
            </v-card-title>
            <v-card-text class="pt-0">
              If that's the case, D = A + 1, because after the A is calculated,
              <b>distance will be increased</b>, so D = A + 1.
            </v-card-text>
          </v-card>
          <v-card
            elevation="8"
            class="pa-0 mx-0 my-2"
            color="blue-grey lighten-5"
          >
            <v-card-title class="font-weight-bold">
              3.) Length(Word 1) != Length(Word 2):
            </v-card-title>
            <v-card-text class="pt-0">
              If that's the case,
              <b>Letter 1 = null</b> or <b>Letter 2 = null</b>. Thus, the
              algorithm will control which is null. Therefore,

              <v-card-title class="font-weight-medium pa-2">
                <b>1.) if Letter 1 = null:</b> &nbsp;&nbsp;D = B + 1
              </v-card-title>
              <v-card-title class="font-weight-medium pa-2">
                <b>2.) if Letter 2 = null:</b> &nbsp;&nbsp;D = C + 1
              </v-card-title>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-divider />
        <v-flex xs6 class="py-2">
          There are some examples to explain this algorithm:
        </v-flex>
        <v-divider />
        <v-flex xs6 class="py-2">
          <v-layout justify-center>
            <table style="border-collapse: collapse;" border="2">
              <colgroup>
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
              </colgroup>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>K</td>
                  <td>I</td>
                  <td>T</td>
                  <td>T</td>
                  <td>E</td>
                  <td>N</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>S</td>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>3</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>4</td>
                  <td>4</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>5</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>2</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>N</td>
                  <td>6</td>
                  <td>6</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>G</td>
                  <td>7</td>
                  <td>7</td>
                  <td>6</td>
                  <td>5</td>
                  <td>4</td>
                  <td>4</td>
                  <td style="background-color: red; color: white"><b>3</b></td>
                </tr>
              </tbody>
            </table>
          </v-layout>
        </v-flex>
        <v-flex xs6 class="py-2">
          Thus, <b>lev(sitting, kitten) = 3</b>
        </v-flex>
        <v-divider />
        <v-flex xs6 class="py-2">
          <v-layout justify-center>
            <table style="border-collapse: collapse;" border="2">
              <colgroup>
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
                <col style="width: 40px;" />
              </colgroup>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td>F</td>
                  <td>O</td>
                  <td>O</td>
                  <td>T</td>
                </tr>
                <tr>
                  <td></td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>F</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>O</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>O</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>4</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>A</td>
                  <td>6</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>7</td>
                  <td>6</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>8</td>
                  <td>7</td>
                  <td>6</td>
                  <td>5</td>
                  <td style="background-color: red; color: white"><b>4</b></td>
                </tr>
              </tbody>
            </table>
          </v-layout>
        </v-flex>
        <v-flex xs6 class="py-2"> Thus, <b>lev(football, foot) = 4</b> </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "home"
};
</script>
